# Generated by Django 3.0.7 on 2021-09-03 20:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0018_auto_20210903_2034'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='started_at',
            new_name='began_at',
        ),
    ]
