# Generated by Django 3.0.7 on 2021-08-22 11:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workingtime',
            name='payments_for_worker',
        ),
    ]
