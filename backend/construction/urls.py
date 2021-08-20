
from django.urls import path

from . import views


urlpatterns = [
    path('construction/', views.ConstructionSitesList.as_view()),
    path('construction/<int:pk>/', views.CostructionSiteDetails.as_view()),
]
