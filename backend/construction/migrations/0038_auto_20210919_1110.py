# Generated by Django 3.0.7 on 2021-09-19 11:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0037_auto_20210919_1109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderexpense',
            name='product',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='construction.Product'),
        ),
    ]
