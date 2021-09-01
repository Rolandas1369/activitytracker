from construction.models import Order, OrderExpense, ConstructionItem, Product, WorkDay, Worker, WorkingTime

import pytest

    # name = models.CharField(max_length=150)
    # location = models.CharField(max_length=150)
    # starting_at = models.DateField()
    # started_at = models.DateField()
    # ended_at = models.DateField()
    # price = models.FloatField()
    # balance = models.FloatField(default=0)

    #  product_quantity = models.FloatField()
    # product = models.ForeignKey('Product', on_delete=CASCADE)
    # order = models.ForeignKey('Order', on_delete=CASCADE)

    #     product_type = models.CharField(max_length=150)
    # price_per_unit = models.FloatField()

    # name = models.CharField(max_length=150, blank=False)
    # surname = models.CharField(max_length=150, blank=False)
    # hourly_salary = models.FloatField() 

    # worker = models.ForeignKey('Worker', on_delete=CASCADE)
    # order = models.ForeignKey('Order', on_delete=CASCADE)
    # hours = models.FloatField()
    # work_day = models.ForeignKey('WorkDay', on_delete=CASCADE, null=True)

@pytest.mark.django_db
def test_order_balance_decreases_after_order_expence_added():
    z = Order.objects.create(name='Random1', location='1514', starting_at='2021-01-01', started_at='2021-05-05', ended_at='2021-02-02' ,price=1500, balance=1500)
    p = Product.objects.create(product_type = 'Woodo', price_per_unit=100)
    OrderExpense.objects.create(product_quantity=2, product=p, order=z)
    OrderExpense.objects.create(product_quantity=2, product=p, order=z)
    order = Order.objects.get(name='Random1')
    assert order.balance == 1100
    r = OrderExpense.objects.order_by('id').first()
    # 1100
    r.delete()
    
    ordaf = Order.objects.get(name='Random1')
    assert ordaf.balance == 1300

    w = Worker.objects.create(name='Rolandas', surname='Rolandas', hourly_salary=10)
    wd = WorkDay.objects.create(date='2021-02-02')
    WorkingTime.objects.create(worker=w, order=ordaf, hours=5, work_day=wd)

 
    assert ordaf.balance == 1250

    sps = WorkingTime.objects.order_by('id').first()
    sps.delete()

    ordaf22 = Order.objects.get(name='Random1')
    assert ordaf22.balance == 1300







