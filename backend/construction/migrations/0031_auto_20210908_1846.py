# Generated by Django 3.0.7 on 2021-09-08 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0030_auto_20210908_1836'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workday',
            name='date',
            field=models.DateField(unique=True),
        ),
    ]