# Generated by Django 3.0.7 on 2022-03-24 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0049_workeringtimeonorder'),
    ]

    operations = [
        migrations.AddField(
            model_name='workingtime',
            name='workers_time',
            field=models.ManyToManyField(to='construction.WorkeringTimeOnOrder'),
        ),
    ]
