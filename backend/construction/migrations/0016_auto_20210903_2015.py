# Generated by Django 3.0.7 on 2021-09-03 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0015_auto_20210903_2011'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='started_at',
            field=models.DateField(null=True),
        ),
    ]
