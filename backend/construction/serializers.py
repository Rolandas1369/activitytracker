from rest_framework import serializers
from construction.models import Order, WorkDay, OrderExpense


class OrderSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Order
        fields = ('__all__')

class WorkDaySerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkDay
        fields = ('__all__')

class OrderExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderExpense
        fields = ('__all__')

