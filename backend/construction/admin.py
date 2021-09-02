from django.contrib import admin
from .models import Order, Worker, WorkDay, Product, OrderExpense, WorkingTime, WorkerExpense, ConstructionItem


class OrderAdmin(admin.ModelAdmin):

    def starting_at_format(self, obj):
        return obj.starting_at.strftime("%Y-%m-%d %A")
    
    def started_at_format(self, obj):
        return obj.started_at.strftime("%Y-%m-%d %A")
    
    def ended_at_format(self, obj):
        if not obj.ended_at:
            return None
        return obj.ended_at.strftime("%Y-%m-%d %A")

    list_display = ('name', 'location', 'starting_at_format', 'started_at_format', 'ended_at_format', 'price', 'balance')

class WorkerAdmin(admin.ModelAdmin): 
    list_display = ('name', 'surname', 'hourly_salary')

class WorkDayAdmin(admin.ModelAdmin): 

    def date_format(self, obj):
        return obj.date.strftime("%Y-%m-%d %A")

    list_display = ('date_format',)

# Register your models here.
admin.site.register(Order, OrderAdmin)
admin.site.register(Worker, WorkerAdmin)
admin.site.register(WorkDay, WorkDayAdmin)
admin.site.register(Product)
admin.site.register(OrderExpense)
admin.site.register(WorkingTime)
admin.site.register(WorkerExpense)
admin.site.register(ConstructionItem)


