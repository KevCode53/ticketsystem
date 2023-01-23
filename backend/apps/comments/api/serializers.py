from django.utils.translation import gettext as _
from apps.comments.models import Comment
from rest_framework import serializers

class CommentSerializer(serializers.ModelSerializer):

  class Meta:
    model = Comment
    fields = '__all__'

class CommentsTicketSerializers(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ('ticket', 'image')
    