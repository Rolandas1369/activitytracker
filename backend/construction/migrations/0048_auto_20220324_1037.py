# Generated by Django 3.0.7 on 2022-03-24 10:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0047_auto_20220323_1547'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workingtime',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orderss', to='construction.Order'),
        ),
    ]