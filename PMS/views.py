from django.shortcuts import render, redirect, get_object_or_404
from . models import Directorate, Branch
import sweetify

def index(request):
    return render(request, 'index.html')

def branches(request):
    branches = Branch.objects.all()
    return render(request, 'branch_list.html', context={'branches': branches})

def createBranch(request):
    if request.method == 'POST':
        position = request.POST.get('position')
        branch_name = request.POST.get('branch')
        directorate = request.POST.get('directorate')
        directorate_obj = Directorate.objects.create(name=directorate)
        branch = Branch.objects.create(position=position, name=branch_name)
        branch.directorates.add(directorate_obj)
        branch.save()
        sweetify.success(request, title="Created", text="Branch has been created successfully", icon="success", button="OK")
        return redirect('/branches/')
    return render(request, 'create_branch_form.html')

def updateBranch(request, branch_id):
    branch = get_object_or_404(Branch, id=branch_id)
    if request.method == 'POST':
        directorate = request.POST.get('directorate')
        if not directorate:
            position = request.POST.get('position')
            branch_name = request.POST.get('branch')
            branch.position = position
            branch.name = branch_name
        else:
            directorate_obj = Directorate.objects.create(name=directorate)
            branch.directorates.add(directorate_obj)
        branch.save()
        
        sweetify.success(request, title="Created", text="Branch has been updated successfully", icon="success", button="OK")
        return redirect('/branches/')
    
    return render(request, 'update_branch_form.html', {'branch': branch})

def deleteBranch(request, branch_id):
    branch = get_object_or_404(Branch, id=branch_id)
    branch.delete()
    sweetify.success(request, title="Deleted", text="Branch has been deleted successfully", icon="success", button="OK")
    return redirect('/branches/')

