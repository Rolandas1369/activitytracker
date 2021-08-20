from django.db.models import fields
from rest_framework import serializers, generics
from construction.models import ConstructionSites
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly

class ConstructionSitesSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = ConstructionSites
        fields = ('__all__')
