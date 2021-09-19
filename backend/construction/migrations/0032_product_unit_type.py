# Generated by Django 3.0.7 on 2021-09-08 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0031_auto_20210908_1846'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='unit_type',
            field=models.CharField(choices=[('M', 'Meters'), ('M3', 'Cubic meters')], default='M3', max_length=2),
        ),
    ]