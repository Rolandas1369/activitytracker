from django.contrib import admin
from .models import Order, Worker, WorkDay, Product, OrderExpense, WorkingTime, WorkerExpense, ConstructionItem


class OrderAdmin(admin.ModelAdmin):

    def starting_at_format(self, obj):
        if not obj.starting_at:
            return None
        return obj.starting_at.strftime("%Y-%m-%d %A")
    
    def started_at_format(self, obj):
        if not obj.began_at:
            return None
        return obj.began_at.strftime("%Y-%m-%d %A")
    
    def ended_at_format(self, obj):
        if not obj.ended_at:
            return None
        return obj.ended_at.strftime("%Y-%m-%d %A")

    list_display = ('name', 'location', 'starting_at_format', 'started_at_format', 'ended_at_format', 'price')

class WorkerAdmin(admin.ModelAdmin): 
    list_display = ('name', 'surname', 'hourly_salary', 'taxes_amount_per_hour')

class WorkDayAdmin(admin.ModelAdmin): 

    def date_format(self, obj):
        return obj.date.strftime("%Y-%m-%d %A")

    list_display = ('date_format',)

class WorkTimesAdmin(admin.ModelAdmin): 

    def work_date_format(self, obj):
        return obj.work_day.date.strftime("%Y-%m-%d %A")
    

    list_display = ('worker', 'order', 'hours', 'work_date_format', 'bonus', 'calculated_pay')

class WorkExpenceAdmin(admin.ModelAdmin):

    def date_paid_format(self, obj):
        return obj.date_paid.strftime("%Y-%m-%d %A") 

    list_display = ('category', 'worker', 'date_paid_format', 'amount', 'assigned_to_order')

# Register your models here.
admin.site.register(Order, OrderAdmin)
admin.site.register(Worker, WorkerAdmin)
admin.site.register(WorkDay, WorkDayAdmin)
admin.site.register(Product)
admin.site.register(OrderExpense)
admin.site.register(WorkingTime, WorkTimesAdmin)
admin.site.register(WorkerExpense, WorkExpenceAdmin)
admin.site.register(ConstructionItem)


