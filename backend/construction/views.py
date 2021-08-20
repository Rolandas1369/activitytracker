from rest_framework import generics
from construction.models import ConstructionSites
from construction.serializers import ConstructionSitesSerializers
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser


class ConstructionSitesList(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = ConstructionSites.objects.all()
    serializer_class = ConstructionSitesSerializers

class CostructionSiteDetails(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = ConstructionSites.objects.all()
    serializer_class = ConstructionSitesSerializers