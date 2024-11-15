from django.urls import path
from StudentApp import views

urlpatterns = [
    path('customer/', views.customerApi),
    path('customer/<int:id>/', views.customerApi),
    path('api/contact-us/', views.contact_message_create),
]
