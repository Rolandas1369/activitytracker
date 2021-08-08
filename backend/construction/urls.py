
from django.urls import path

from . import views

urlpatterns = [
    path('construction/', views.index, name='index'),
]
