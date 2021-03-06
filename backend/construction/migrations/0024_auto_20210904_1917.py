# Generated by Django 3.0.7 on 2021-09-04 19:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0023_auto_20210904_1838'),
    ]

    operations = [
        migrations.AddField(
            model_name='constructionitem',
            name='related_order_expence',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='construction.Order'),
        ),
        migrations.AddField(
            model_name='workingtime',
            name='bonus',
            field=models.FloatField(default=0),
        ),
    ]
