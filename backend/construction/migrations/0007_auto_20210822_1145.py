# Generated by Django 3.0.7 on 2021-08-22 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0006_auto_20210822_1137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workday',
            name='date',
            field=models.DateField(auto_now=True),
        ),
    ]
