# Generated by Django 5.1 on 2024-08-21 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminapp', '0006_alter_withdrawal_username_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='withdrawallist',
            name='bankid',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='withdrawallist',
            name='bankinfo',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
