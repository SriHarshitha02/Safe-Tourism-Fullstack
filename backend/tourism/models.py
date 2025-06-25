from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

# Destination model
class Destination(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)
    '''image_url = models.URLField(blank=True)'''
    '''image = models.ImageField(upload_to='images/')''' 
    image = models.URLField(default="https://via.placeholder.com/150")
    category = models.CharField(max_length=50, choices=[
        ('Nature', 'Nature'),
        ('Adventure', 'Adventure'),
        ('Historical', 'Historical'),
        ('Beach', 'Beach'),
        ('Other', 'Other')
    ])
    rating = models.FloatField(default=0.0)
    map_link = models.URLField(blank=True)

    def __str__(self):
        return self.name

# Review model
class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    destination = models.ForeignKey(Destination, related_name='reviews', on_delete=models.CASCADE)
    comment = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.destination.name}"

# Favorite model
class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username} - {self.destination.name}"
