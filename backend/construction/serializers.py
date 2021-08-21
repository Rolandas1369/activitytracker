from django.db import models
from django.db.models import fields
from rest_framework import serializers
from construction.models import Order, WorkDay


class OrderSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Order
        fields = ('__all__')

class WorkDaySerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkDay
        fields = ('__all__')

class ExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkDay
        fields = ('__all__')

