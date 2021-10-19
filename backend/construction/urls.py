
from django.urls import path

from . import views


urlpatterns = [
    path('workdays/', views.WorkDaysList.as_view()),
    path('worktimes/', views.WorkingTimesList.as_view()),
    path('orders/', views.OrdersList.as_view()),
    path('orders/<int:pk>', views.OrderDetailsView.as_view()),
   
]
