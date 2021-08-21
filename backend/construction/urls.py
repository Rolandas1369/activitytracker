
from django.urls import path

from . import views


urlpatterns = [
    path('workdays/', views.WorkDaysList.as_view()),
    path('orders/', views.OrdersList.as_view()),
]
