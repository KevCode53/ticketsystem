from rest_framework import serializers

from apps.users.models import Profile


class CustomTokenUserProfileSerializer(serializers.ModelSerializer):

  class Meta:
    model = Profile
    fields = ('image', 'user')

  def to_representation(self, instance):
    return {
      'username': instance.user.username,
      'name': instance.user.get_full_name(),
      # 'email': instance.user.email,
      'image': instance.image.url
    }