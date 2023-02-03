from rest_framework import serializers

from apps.users.models import Profile


class CustomTokenUserProfileSerializer(serializers.ModelSerializer):

  class Meta:
    model = Profile
    fields = ('image', 'user')

  def to_representation(self, instance):
    return {
      'first_name': instance.user.name,
      'image': instance.image.url,
      'last_name': instance.user.last_name,
      'username': instance.user.username,
      # 'email': instance.user.email,
    }