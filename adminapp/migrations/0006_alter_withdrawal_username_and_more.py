# Generated by Django 5.1 on 2024-08-21 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminapp', '0005_alter_withdrawal_desc_alter_withdrawallist_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='withdrawal',
            name='username',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='withdrawallist',
            name='username',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
