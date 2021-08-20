from django.contrib import admin
from django.urls import include, path
from rest_framework import routers, serializers, viewsets

# from account.api.views import (
#     registration_view
# )


# Routers provide an easy way of automatically determining the URL conf.

urlpatterns = [
    path('api/account/', include('account.api.urls')),
    path('api/', include('construction.urls')),
    path('api/admin/', admin.site.urls),
]
