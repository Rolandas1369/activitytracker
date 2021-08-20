
from django.http.response import Http404
from rest_framework import serializers, status
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.decorators import action, api_view
from rest_framework.views import APIView
from .serializers import RegistrationSerializer

from account.api.serializers import RegistrationSerializer

class CustomUserCreate(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        reg_serializer = RegistrationSerializer(data=request.data)
        if reg_serializer.is_valid():
            new_user = reg_serializer.save()
            if new_user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
