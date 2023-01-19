from django.utils.translation import gettext as _
from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
  """ Serializers for Users Objects """

  class Meta:
    model = get_user_model()
    fields = ('email', 'username', 'password', 'name', 'last_name')
    # extra_kwargs = {
    #   'password': {
    #     'write_only': True,
    #     'min_length': 5
    #   }
    # }

  def create(self, validated_data):
    """ Create a new user """
    return get_user_model().objects.create_user(**validated_data)