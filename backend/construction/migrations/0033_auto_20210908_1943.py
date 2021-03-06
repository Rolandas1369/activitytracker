# Generated by Django 3.0.7 on 2021-09-08 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0032_product_unit_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='unit_type',
            field=models.CharField(choices=[('M', 'Meters'), ('M3', 'Cubic meters'), ('M2', 'Square meters'), ('H', 'Hours')], default='M3', max_length=2),
        ),
    ]
