from rest_framework import serializers
from construction.models import Order, WorkDay, Worker, WorkingTime, OrderExpense


class OrderSerializer(serializers.ModelSerializer):

    # name = serializers.StringRelatedField(many=False)
    
    class Meta:
        model = Order
        
        fields = ('id', 'name', 'location', 'starting_at', 'began_at', 'ended_at', 'completed', 'price')

class WorkDaySerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkDay
        fields = ('__all__')

class WorkerField(serializers.StringRelatedField):

    def to_internal_value(self, value):
        sector_class = Worker.objects.filter(name=value)
        if sector_class and (len(sector_class)) == 1:
            return sector_class.get().id
        else:
            raise serializers.ValidationError("Sector with name: %s not found" % value)
        

class WorkTimesSerializer(serializers.ModelSerializer):

    # order = serializers.StringRelatedField(many=False)
    # work_day = serializers.StringRelatedField(many=False)
    # worker = serializers.StringRelatedField(many=True)
    workers = WorkerField(many=True)
    
    class Meta:
        model = WorkingTime
        fields = ('id', 'worker', 'order', 'work_day', 'hours', 'workers')
        # depth = 1

   

class OrderExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderExpense
        fields = ('__all__')

class WorkersSerializer(serializers.ModelSerializer):

    # name = serializers.StringRelatedField(many=False)

    class Meta:
        model = Worker
        fields = ('id', 'name', 'surname', 'hourly_salary', 'taxes_amount_per_hour')
    
    
