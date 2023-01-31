from django.contrib import admin
from .models import *

# Register your models here.

class DirectorateAdmin(admin.ModelAdmin):
    list_display = ('name', 'created')

class BranchAdmin(admin.ModelAdmin):
    list_display = ('name', 'join_date')

admin.site.register(Directorate, DirectorateAdmin)
admin.site.register(Branch, BranchAdmin)