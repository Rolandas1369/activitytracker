from rest_framework import generics
from construction.models import Order, WorkDay, Expense
from construction.serializers import OrderSerializer, WorkDaySerializer, ExpenseSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser


class OrdersList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class WorkDaysList(generics.ListCreateAPIView):
    queryset = WorkDay.objects.all()
    serializer_class = WorkDaySerializer

class ExpensesList(generics.ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer