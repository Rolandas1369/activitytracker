# Generated by Django 3.0.7 on 2021-09-04 20:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0024_auto_20210904_1917'),
    ]

    operations = [
        migrations.AddField(
            model_name='workerexpense',
            name='assigned_to_order',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='construction.Order'),
        ),
    ]