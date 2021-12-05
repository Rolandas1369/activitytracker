
from django.urls import path

from . import views


urlpatterns = [
    path('workdays/', views.WorkDaysList.as_view()),
    # path('workdays/<int:pk>', views.WorkDayDetailsView.as_view()),
    path('workingtimes/', views.WorkingTimesList.as_view()),
    path('workingtimes/<int:pk>', views.WorkingTimesDetailsView.as_view()),
    path('orders/', views.OrdersList.as_view()),
    path('orders/<int:pk>', views.OrderDetailsView.as_view()),
   
]
