from django.utils.translation import gettext as _
from django.contrib.auth import get_user_model, authenticate
from apps.users.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from apps.users.api.serializers.profile_serializers import CustomTokenUserProfileSerializer


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
  pass

class CustomUserSerializer(TokenObtainPairSerializer):
  class Meta:
    model = User
    fields = ('username', 'email', 'name', 'last_name')

class UserSerializer(serializers.ModelSerializer):
  """ Serializers for Users Objects """

  class Meta:
    model = get_user_model()
    fields = ('email', 'username', 'password', 'name', 'last_name')

  def create(self, validated_data):
    """ Create a new user """
    return get_user_model().objects.create_user(**validated_data)


class UpdateUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'email', 'name', 'last_name')

class UserListSerializer(serializers.ModelSerializer):
  profile = CustomTokenUserProfileSerializer(read_only=True)
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'profile')

  # def to_representation(self, instance):
  #   print(self)
  #   return {
  #     'id': instance.id,
  #     'username': instance.username,
  #     'email': instance.email,
  #     'profile': self.profile
  #     # 'password': instance.password
  #   }