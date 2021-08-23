from rest_framework import generics
from construction.models import Order, WorkDay, OrderExpense
from construction.serializers import OrderSerializer, WorkDaySerializer, OrderExpenseSerializer


class OrdersList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class WorkDaysList(generics.ListCreateAPIView):
    queryset = WorkDay.objects.all()
    serializer_class = WorkDaySerializer

class ExpensesList(generics.ListCreateAPIView):
    queryset = OrderExpense.objects.all()
    serializer_class = OrderExpenseSerializer