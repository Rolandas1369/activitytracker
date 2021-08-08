from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from construction.models import ConstructionSites
from construction.serializers import ConstructionSitesSerializers
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def construction_sites_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        construction_sites = ConstructionSites.objects.all()
        serializer = ConstructionSitesSerializers(construction_sites, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        
        serializer = ConstructionSitesSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def construction_sites_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        construction_site = ConstructionSites.objects.get(pk=pk)
    except ConstructionSites.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ConstructionSitesSerializers(construction_site)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ConstructionSitesSerializers(construction_site, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        construction_site.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)