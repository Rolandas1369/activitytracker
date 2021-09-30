from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import related
from django.utils import tree

class Order(models.Model):
    name = models.CharField(max_length=150)
    location = models.CharField(max_length=150, null=True, blank=True)
    starting_at = models.DateField(null=True, blank=True)
    began_at = models.DateField(default='2021-05-07', null=True, blank=True)
    ended_at = models.DateField(null=True, blank=True)
    price = models.FloatField()

    def get_balance(self):
        return 10
              
    def __str__(self) -> str:
        return self.name

class OrderExpense(models.Model):
    product_quantity = models.FloatField()
    product = models.ForeignKey('Product', on_delete=CASCADE, blank=True, default=None, null=True)
    fixed_price_item = models.CharField(max_length=100, default=None, blank=True, null=True)
    order = models.ForeignKey('Order', on_delete=CASCADE)
    calculated_expense = models.FloatField(editable=False)
    date_payd = models.DateField(default=None, blank=True, null=True)
    amount_payd = models.FloatField(default=None, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.product:
            self.calculated_expense = self.product_quantity * self.product.price_per_unit
        else:
            self.calculated_expense = self.amount_payd
        
        super().save(*args, **kwargs)
        
    def __str__(self) -> str:
        return self.order.name

class WorkerExpense(models.Model):
    category = models.CharField(max_length=150)
    worker = models.ForeignKey('Worker', on_delete=CASCADE)
    date_paid = models.DateField()
    amount = models.FloatField(null=True)
    assigned_to_order = models.ForeignKey('Order', on_delete=CASCADE, default=None)

    def __str__(self) -> str:
        return self.worker.name

    

class ConstructionItem(models.Model):
    item = models.CharField(max_length=150)
    price = models.FloatField()
    date_bought = models.DateField()
    related_order_expence = models.ForeignKey('Order', on_delete=CASCADE, default=None)   

    def __str__(self) -> str:
        return self.item 



class Product(models.Model):

    class UnitType(models.TextChoices):
        METERS = 'M', ('Meters')
        CUBIC_METERS = 'M3', ('Cubic meters')
        SQUARE_METERS = 'M2', ('Square meters')
        HOURS = "H", ('Hours')

    product_type = models.CharField(max_length=150)
    price_per_unit = models.FloatField()
    unit_type = models.CharField(max_length=2, choices=UnitType.choices, default=UnitType.CUBIC_METERS)

    def __str__(self) -> str:
        return self.product_type

from django.db.models import F
class WorkDay(models.Model):
    date = models.DateField(unique=True)
    date_formated = models.CharField(default=None, null=True, blank=True, max_length=100)

    def save(self, *args, **kwargs):   
        self.date_formated = self.date.strftime("%Y-%m-%d %A")
        super().save(*args, **kwargs)  # Call the "real" save() method.balance
    
    def __str__(self):
        return str(self.date)

class Worker(models.Model):
    name = models.CharField(max_length=150, blank=False)
    surname = models.CharField(max_length=150, blank=False)
    hourly_salary = models.FloatField()
    taxes_amount_per_hour = models.FloatField(default=8.8)    

    def __str__(self) -> str:
        return self.name


class WorkingTime(models.Model):
    worker = models.ForeignKey('Worker', on_delete=CASCADE)
    order = models.ForeignKey('Order', on_delete=CASCADE)
    hours = models.FloatField()
    work_day = models.ForeignKey('WorkDay', on_delete=CASCADE, null=True)
    bonus = models.FloatField(default=0)
    calculated_pay = models.FloatField(default=None, editable=False)
    worked_on = models.CharField(max_length=1000, default=None, null=True, blank=True)

    

    @property
    def cp(self):
        return self.worker.hourly_salary * self.hours + self.worker.taxes_amount_per_hour * self.hours + self.bonus

    def save(self, *args, **kwargs):   
        self.calculated_pay = self.cp
        super().save(*args, **kwargs)  # Call the "real" save() method.balance
        
    def __str__(self) -> str:
        return self.order.name    