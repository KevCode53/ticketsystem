from django.utils.translation import gettext as _
from apps.comments.models import Comment
from rest_framework import serializers
from apps.users.api.serializers.profile_serializers import CustomTokenUserProfileSerializer


def getCommentProfile(id, model):
  profile = model.objects.filter(user__id=id).first()
  return profile.image.url

class CommentSerializer(serializers.ModelSerializer):
  image = serializers.CharField()
  class Meta:
    model = Comment
    # fields = ('created','profile','comment')

  def to_representation(self, instance):
    model = CustomTokenUserProfileSerializer.Meta.model
    self.image = getCommentProfile(instance.created_by.id, model)
    return {
      'id': instance.id,
      'created': instance.created,
      'comment': instance.comment,
      'user_id': instance.created_by.id,
      'username': instance.created_by.username,
      'image': self.image
    }
class CommentsTicketSerializers(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ('ticket', 'image')