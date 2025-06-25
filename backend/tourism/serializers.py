from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Destination, Review, Favorite

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

# Review Serializer
class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'user', 'comment', 'rating', 'created_at']

# Destination Serializer
class DestinationSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Destination
        fields = ['id', 'name', 'description', 'location','image', 'category', 'rating', 'map_link', 'reviews']

# Favorite Serializer
class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'destination']

