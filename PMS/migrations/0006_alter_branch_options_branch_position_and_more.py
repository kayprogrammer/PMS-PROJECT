# Generated by Django 4.1.5 on 2023-01-31 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("PMS", "0005_directorate_rename_branchname_branch_name_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="branch",
            options={"ordering": ["-join_date"]},
        ),
        migrations.AddField(
            model_name="branch",
            name="position",
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name="branch",
            name="join_date",
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
