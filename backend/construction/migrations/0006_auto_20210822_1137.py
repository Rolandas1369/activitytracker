# Generated by Django 3.0.7 on 2021-08-22 11:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0005_expense_worker'),
    ]

    operations = [
        migrations.RenameField(
            model_name='worker',
            old_name='daily_salary',
            new_name='hourly_salary',
        ),
        migrations.RemoveField(
            model_name='expense',
            name='worker',
        ),
    ]
