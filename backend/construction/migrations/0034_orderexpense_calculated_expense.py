# Generated by Django 3.0.7 on 2021-09-08 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0033_auto_20210908_1943'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderexpense',
            name='calculated_expense',
            field=models.FloatField(default=0),
        ),
    ]
