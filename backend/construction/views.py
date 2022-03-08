from rest_framework import generics
from construction.models import Order, WorkDay, Worker, WorkingTime, OrderExpense
from construction.serializers import OrderSerializer, WorkDaySerializer, OrderExpenseSerializer, WorkTimesSerializer, WorkersSerializer
from django_filters.rest_framework import DjangoFilterBackend

class OrdersList(generics.ListCreateAPIView):

    class Meta:
        ordering = ('name',)

    queryset = Order.objects.order_by('name')
    serializer_class = OrderSerializer

    filter_backends =  [DjangoFilterBackend]
    filterset_fields = ['completed']

class OrderDetailsView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OrderSerializer   

    

    def get_queryset(self):
        
        order = Order.objects.get(pk=self.kwargs['pk'])
        return Order.objects.filter(name=order)

class WorkDaysList(generics.ListCreateAPIView):
    queryset = WorkDay.objects.all()
    serializer_class = WorkDaySerializer

class WorkingTimesList(generics.ListAPIView):
    queryset = WorkingTime.objects.all()
    serializer_class = WorkTimesSerializer

    filter_backends =  [DjangoFilterBackend]
    filterset_fields = ['order', 'worker', 'work_day']



class WorkingTimesDetailsView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = WorkTimesSerializer
    
    def get_queryset(self):  
        return WorkingTime.objects.all()


class ExpensesList(generics.ListCreateAPIView):
    queryset = OrderExpense.objects.all()
    serializer_class = OrderExpenseSerializer

class WorkersList(generics.ListCreateAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkersSerializer

    filter_backends =  [DjangoFilterBackend]
    filterset_fields = ['name']