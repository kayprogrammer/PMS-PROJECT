# Generated by Django 4.1.5 on 2023-01-29 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PMS', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='branch',
            name='date_created',
            field=models.DateField(auto_created=True),
        ),
    ]
