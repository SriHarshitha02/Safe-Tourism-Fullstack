from django.urls import path
from .views import (
    DestinationListCreate,
    DestinationDetail,
    ReviewCreate,
    AddFavorite,
    UserFavorites,
    RegisterUser,
    DestinationListView,
    LoginView
)

urlpatterns = [
    path('destinations/', DestinationListCreate.as_view(), name='destination-list'),
    path('destinations/<int:pk>/', DestinationDetail.as_view(), name='destination-detail'),
    path('destinations/<int:pk>/review/', ReviewCreate.as_view(), name='add-review'),
    path('destinations/<int:pk>/favorite/', AddFavorite.as_view(), name='add-favorite'),
    path('favorites/', UserFavorites.as_view(), name='user-favorites'),
    path('register/', RegisterUser.as_view(), name='register-user'),
    path('api/destinations/', DestinationListView.as_view(), name='destination-list'),
    path('login/', LoginView.as_view(), name='login'),

]
