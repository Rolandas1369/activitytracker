# Generated by Django 3.0.7 on 2021-08-23 07:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('construction', '0010_additionalitem_workerexpense'),
    ]

    operations = [
        migrations.CreateModel(
            name='ConstructionItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=150)),
                ('price', models.FloatField()),
                ('date_bought', models.DateField()),
            ],
        ),
        migrations.DeleteModel(
            name='AdditionalItem',
        ),
        migrations.AddField(
            model_name='workerexpense',
            name='amount',
            field=models.FloatField(null=True),
        ),
    ]
