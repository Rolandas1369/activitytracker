from django.contrib import admin
from django.urls import include, path
from rest_framework import routers, serializers, viewsets
from django.contrib.auth import views as auth_views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# from account.api.views import (
#     registration_view
# )


# Routers provide an easy way of automatically determining the URL conf.

urlpatterns = [
    path('api/account/', include('account.api.urls')),
    path('api/', include('construction.urls')),
    
    path('api/admin/', admin.site.urls),
    path('api/api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
