from rest_framework import serializers
from construction.models import Order, WorkDay, WorkingTime, OrderExpense


class OrderSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Order
        
        fields = ('__all__')

class WorkDaySerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkDay
        fields = ('__all__')

class WorkTimesSerializer(serializers.ModelSerializer):

    order = serializers.StringRelatedField(many=False)
    work_day = serializers.StringRelatedField(many=False)
    
    class Meta:
        model = WorkingTime
        fields = ('worker', 'order', 'work_day')

   

class OrderExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderExpense
        fields = ('__all__')

