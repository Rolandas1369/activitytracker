from django.db import models
from django.db.models.deletion import CASCADE


class Order(models.Model):
    name = models.CharField(max_length=150)
    location = models.CharField(max_length=150)
    starting_at = models.DateField()
    started_at = models.DateField()
    ended_at = models.DateField()
    price = models.FloatField()
    balance = models.FloatField(default=0)
              
    def __str__(self) -> str:
        return self.name

class Expense(models.Model):
    product_quantity = models.FloatField()
    product = models.ForeignKey('Product', on_delete=CASCADE)
    order = models.ForeignKey('Order', on_delete=CASCADE)
    cost_of_product = models.FloatField(default=None)

    def save(self, *args, **kwargs):
        self.cost_of_product = self.product_quantity * self.product.price_per_unit
        
        super().save(*args, **kwargs)  # Call the "real" save() method.balance
        self.order.balance = self.order.price - self.cost_of_product 
        self.order.save()
        
    def __str__(self) -> str:
        return self.order.name


class Product(models.Model):
    product_type = models.CharField(max_length=150)
    price_per_unit = models.FloatField()

    def __str__(self) -> str:
        return self.product_type


class WorkDay(models.Model):
    date = models.DateField()
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    workers = models.ManyToManyField('Worker')

    
    def add_workers(self):
        self.workers_list.choices.append(('dd', 'dd'))
    
    

    # BP = 'dd'
    # GG = 'bb'
    # workers_list = workers.objects.all()

    # workers_hours_list = [
    #     # (
    #     #     BP, (('Ok', '1'),('ok', '2')),
           
        
    #     # ),
    #     # (
    #     #     GG, (('Ok', '1'),('ok', '2')),
    #     # ),
    # ]

    # # for worker in workers_list:
    # #     workers_hours_list.append((worker.name, worker.name))

    # working_hours = models.CharField(
    #     max_length=20,
    #     choices=YEAR_IN_SCHOOL_CHOICES,
    #     default=0
    # )


    def __str__(self) -> str:
        return str(self.date)

class Worker(models.Model):
    name = models.CharField(max_length=150, blank=False)
    surname = models.CharField(max_length=150, blank=False)
    daily_salary = models.FloatField()    

    def __str__(self) -> str:
        return self.name

