from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import Destination, Review, Favorite
from .serializers import DestinationSerializer, ReviewSerializer, FavoriteSerializer, UserSerializer


# List all destinations or create one (Admin use)
class DestinationListCreate(generics.ListCreateAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

# Retrieve, update, or delete a destination
class DestinationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

# Submit a review
class ReviewCreate(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        destination = Destination.objects.get(pk=pk)
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, destination=destination)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Save a destination as favorite
class AddFavorite(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        destination = Destination.objects.get(pk=pk)
        Favorite.objects.create(user=request.user, destination=destination)
        return Response({"message": "Added to favorites"}, status=status.HTTP_201_CREATED)

# Get user's favorite destinations
class UserFavorites(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        favorites = Favorite.objects.filter(user=request.user)
        serializer = FavoriteSerializer(favorites, many=True)
        return Response(serializer.data)

# Basic registration API
class RegisterUser(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.d

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'  # or list specific fields like name, image_url, map_link, etc.

class DestinationListView(APIView):
    def get(self, request):
        destinations = Destination.objects.all()
        serializer = DestinationSerializer(destinations, many=True)
        return Response(serializer.data)

from rest_framework.decorators import api_view


class RegisterUser(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")
        full_name = request.data.get("full_name")

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=full_name
        )

        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user is not None:
            return Response({"message": "Login successful",}, status=status.HTTP_200_OK)
        return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)