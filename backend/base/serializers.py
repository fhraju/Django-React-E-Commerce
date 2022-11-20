from rest_framework import serializers
#from django.contrib.auth.models import User

from .models import Product

class PrductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        #['user', 'name', 'image', 'brand', 'category', 'description', 'rating', 'numReviews', 'price', 'countInStock', 'createdAt', '_id']