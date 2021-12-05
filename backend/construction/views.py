from rest_framework import generics
from construction.models import Order, WorkDay, WorkingTime, OrderExpense
from construction.serializers import OrderSerializer, WorkDaySerializer, OrderExpenseSerializer, WorkTimesSerializer


class OrdersList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetailsView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OrderSerializer

    def get_queryset(self):
        order = Order.objects.get(pk=self.kwargs['pk'])
        return Order.objects.filter(name=order)

class WorkDaysList(generics.ListCreateAPIView):
    queryset = WorkDay.objects.all()
    serializer_class = WorkDaySerializer

class WorkingTimesList(generics.ListCreateAPIView):
    queryset = WorkingTime.objects.all()
    serializer_class = WorkTimesSerializer

class WorkingTimesDetailsView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = WorkTimesSerializer
    
    def get_queryset(self):  
        return WorkingTime.objects.all()


class ExpensesList(generics.ListCreateAPIView):
    queryset = OrderExpense.objects.all()
    serializer_class = OrderExpenseSerializer