from django.db import models
from django.db.models.deletion import CASCADE

class Order(models.Model):
    name = models.CharField(max_length=150)
    location = models.CharField(max_length=150)
    starting_at = models.DateField(null=True, blank=True)
    started_at = models.DateField(null=True, blank=True)
    ended_at = models.DateField(null=True, blank=True)
    price = models.FloatField()
    balance = models.FloatField(default=10)
              
    def __str__(self) -> str:
        return self.name

class OrderExpense(models.Model):
    product_quantity = models.FloatField()
    product = models.ForeignKey('Product', on_delete=CASCADE)
    order = models.ForeignKey('Order', on_delete=CASCADE)

    def save(self, *args, **kwargs):
        cost_of_product = self.product_quantity * self.product.price_per_unit
        
        super().save(*args, **kwargs)  # Call the "real" save() method.balance
        self.order.balance = self.order.balance - cost_of_product 
        self.order.save()
    
    def delete(self, *args, **kwargs):
        cost_of_product = self.product_quantity * self.product.price_per_unit
        
        super().save(*args, **kwargs)  # Call the "real" save() method.balance
        self.order.balance = self.order.balance + cost_of_product 
        self.order.save()
    
    # TODO implement delete functionality
        
    def __str__(self) -> str:
        return self.order.name

class WorkerExpense(models.Model):
    category = models.CharField(max_length=150)
    worker = models.ForeignKey('Worker', on_delete=CASCADE)
    date_paid = models.DateField()
    amount = models.FloatField(null=True)

    def __str__(self) -> str:
        return self.worker

    

class ConstructionItem(models.Model):
    item = models.CharField(max_length=150)
    price = models.FloatField()
    date_bought = models.DateField()   

    def __str__(self) -> str:
        return self.product 


class Product(models.Model):
    product_type = models.CharField(max_length=150)
    price_per_unit = models.FloatField()

    def __str__(self) -> str:
        return self.product_type


class WorkDay(models.Model):
    date = models.DateField()

    def __str__(self) -> str:
        return str(self.date)

class Worker(models.Model):
    name = models.CharField(max_length=150, blank=False)
    surname = models.CharField(max_length=150, blank=False)
    hourly_salary = models.FloatField()    

    def __str__(self) -> str:
        return self.name


class WorkingTime(models.Model):
    worker = models.ForeignKey('Worker', on_delete=CASCADE)
    order = models.ForeignKey('Order', on_delete=CASCADE)
    hours = models.FloatField()
    work_day = models.ForeignKey('WorkDay', on_delete=CASCADE, null=True)

    def save(self, *args, **kwargs):    
        super().save(*args, **kwargs)  # Call the "real" save() method.balance
        self.order.balance = self.order.balance - (self.worker.hourly_salary * self.hours)
        self.order.save()

    def delete(self, *args, **kwargs):    
        super().save(*args, **kwargs)  # Call the "real" save() method.balance
        self.order.balance = self.order.balance + (self.worker.hourly_salary * self.hours)
        self.order.save()

    # TODO implement delete functionality
        
    def __str__(self) -> str:
        return self.order.name    