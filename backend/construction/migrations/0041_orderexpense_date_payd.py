# Generated by Django 3.0.7 on 2021-09-29 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0040_orderexpense_fixed_price_item'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderexpense',
            name='date_payd',
            field=models.DateField(blank=True, default=None, null=True),
        ),
    ]
