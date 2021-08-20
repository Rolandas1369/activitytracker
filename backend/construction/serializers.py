from django.db.models import fields
from rest_framework import serializers, generics
from rest_framework.decorators import permission_classes
from construction.models import ConstructionSites


class ConstructionSitesSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = ConstructionSites
        fields = ('__all__')
