from django.contrib import admin
from .models import Order, Worker, WorkDay, Product, Expense, WorkingTime
# Register your models here.
admin.site.register(Order)
admin.site.register(Worker)
admin.site.register(WorkDay)
admin.site.register(Product)
admin.site.register(Expense)
admin.site.register(WorkingTime)
