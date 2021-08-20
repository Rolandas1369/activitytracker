from django.urls import path
from account.api.views import (
    CustomUserCreate
)

app_name = "accounts"

urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name="register")
]