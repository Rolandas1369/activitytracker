# Generated by Django 3.0.7 on 2021-08-22 11:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0004_remove_expense_cost_of_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='expense',
            name='worker',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='construction.Worker'),
        ),
    ]