
from django.urls import path

from . import views


urlpatterns = [
    path('construction/', views.construction_sites_list),
    path('construction/<int:pk>/', views.construction_sites_detail),
]
