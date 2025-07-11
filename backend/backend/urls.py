"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""



'''from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tourism.urls')),  # 👈 Connect tourism app
]'''




from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static

# Simple home view
def home(request):
    return HttpResponse("Welcome to the Safe Tourism Website!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),  # Home route
    path('api/', include('tourism.urls')),  # Replace 'tourism_app' with your app name
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




