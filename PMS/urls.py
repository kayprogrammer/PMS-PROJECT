from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('branches/', views.branches, name='branches'),
    path('create_branch/', views.createBranch, name='create_branch'),
    path('update_branch/<int:branch_id>/', views.updateBranch, name='update_branch'),
    path('delete_branch/<int:branch_id>/', views.deleteBranch, name='delete_branch'),

]