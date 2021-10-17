from django.contrib import admin
from django.db.models import query
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
        if not obj.date:
            return None
        return str(obj.date.strftime("%Y-%m-%d %A"))

    list_display = ('date_format','date', 'date_formated')
    list_filter = ('date',)

class WorkTimesAdmin(admin.ModelAdmin): 

    def work_date_format(self, obj):
        if not obj.work_day:
            return None
        return obj.work_day.date.strftime("%Y-%m-%d %A")

    def get_queryset(self, request):
        queryset = super(WorkTimesAdmin, self).get_queryset(request)
        return queryset.order_by('-work_day__date_formated')


    
   
    list_filter = ('work_day', 'worker', 'order')
    list_display = ('worker', 'work_date_format', 'order', 'hours',  'bonus', 'calculated_pay', 'worked_on')

class WorkExpenceAdmin(admin.ModelAdmin):

    def date_paid_format(self, obj):
        return obj.date_paid.strftime("%Y-%m-%d %A") 

    list_display = ('category', 'worker', 'date_paid_format', 'amount', 'assigned_to_order')


class OrderExpenseAdmin(admin.ModelAdmin):
    list_display = ('product_quantity', 'date_payd', 'fixed_price_item', 'product', 'order', 'calculated_expense')

# Register your models here.
admin.site.register(Order, OrderAdmin)
admin.site.register(Worker, WorkerAdmin)
admin.site.register(WorkDay, WorkDayAdmin)
admin.site.register(Product)
admin.site.register(OrderExpense, OrderExpenseAdmin)
admin.site.register(WorkingTime, WorkTimesAdmin)
admin.site.register(WorkerExpense, WorkExpenceAdmin)
admin.site.register(ConstructionItem)


