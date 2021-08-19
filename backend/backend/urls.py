from django.contrib import admin
from django.urls import include, path
from rest_framework import routers, serializers, viewsets




# Routers provide an easy way of automatically determining the URL conf.

urlpatterns = [
    path('api/', include('construction.urls')),
    path('api/admin/', admin.site.urls),
]
