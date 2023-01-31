from django.db import models

# Create your models here.

from django.db import models
from django.db.models import Model

class Directorate(models.Model):
    name = models.CharField(max_length=200, null=True) 
    created = models.DateField(auto_now_add=True)

class Branch(models.Model):
    position = models.IntegerField(null=True)
    name = models.CharField(max_length=255)
    directorates = models.ManyToManyField(Directorate)
    join_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['position']
    