from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from apps.users.api.serializers.user_serializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
  serializer_class = UserSerializer

  def get_queryset(self, pk=None):
    if pk is None:
      return self.get_serializer().Meta.model.objects.all()
    return self.get_serializer().Meta.model.objects.filter(id=pk).first()

  # List the all Users
  def list(self, request):
    users = self.get_serializer().Meta.model.objects.all()
    users_serializer = UserSerializer(users, many=True)
    return Response(users_serializer.data, status=status.HTTP_200_OK)