from rest_framework import serializers, generics
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from construction.models import ConstructionSites
from construction.serializers import ConstructionSitesSerializers
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


class ConstructionSitesList(generics.ListCreateAPIView):
    queryset = ConstructionSites.objects.all()
    serializer_class = ConstructionSitesSerializers
    pass

class CostructionSiteDetails(generics.RetrieveDestroyAPIView):
    queryset = ConstructionSites.objects.all()
    serializer_class = ConstructionSitesSerializers
    pass