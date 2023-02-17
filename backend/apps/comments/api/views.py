from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from apps.comments.api.serializers import CommentSerializer

class CommentViewSet(viewsets.GenericViewSet):
  serializer_class = CommentSerializer
  # permission_classes = (IsAuthenticated, )

  def get_queryset(self, pk=None):
    if self.queryset is None:
        return self.serializer_class().Meta.model.objects.all()
    return self.queryset

  def get_object(self, pk):
    return get_object_or_404(self.serializer_class.Meta.model, pk=pk)

  def list(self, request):
    comments = self.get_queryset()
    print(request.GET)
    comments_serializer = CommentSerializer(comments, many=True)
    return Response(comments_serializer.data, status=status.HTTP_200_OK)

  def create(self, request):
    comment = self.request.data
    comment_serializer = CommentSerializer(data=comment)

    if comment_serializer.is_valid():
      comment_serializer.save()
      return Response(comment_serializer.data)
    return Response({'error': comment_serializer.errors}, status=status.HTTP_409_CONFLICT)

