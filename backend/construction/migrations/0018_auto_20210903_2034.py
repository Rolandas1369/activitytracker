# Generated by Django 3.0.7 on 2021-09-03 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0017_auto_20210903_2024'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='balance',
            field=models.FloatField(default=10),
        ),
    ]
