from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from apps.users.api.serializers.user_serializers import UserSerializer, UserListSerializer, UpdateUserSerializer


# class UserViewSet(viewsets.ModelViewSet):
#   serializer_class = UserSerializer
#   permission_classes = (IsAuthenticated,)

#   def get_queryset(self, pk=None):
#     if pk is None:
#       return self.get_serializer().Meta.model.objects.all()
#     return self.get_serializer().Meta.model.objects.filter(id=pk).first()

#   # List the all Users
#   def list(self, request):
#     users = self.get_serializer().Meta.model.objects.all()
#     users_serializer = UserSerializer(users, many=True)
#     return Response(users_serializer.data, status=status.HTTP_200_OK)


class UserViewSet(viewsets.GenericViewSet):
  serializer_class = UserSerializer
  list_serializer_class = UserListSerializer
  # permission_classes = (IsAuthenticated,)

  def get_queryset(self, pk=None):
    if self.queryset is None:
      return self.serializer_class().Meta.model.objects.filter(is_active=True)
    return self.queryset

  def get_object(self, pk):
    return get_object_or_404(self.serializer_class.Meta.model, pk=pk)

  def list(self, request):
    users = self.get_queryset()
    users_serializer = self.list_serializer_class(users, many=True)
    return Response(users_serializer.data, status=status.HTTP_200_OK)

  def create(self, request):
    user_serializer = self.serializer_class(data=request.data)
    if user_serializer.is_valid():
      user_serializer.save()
      return Response({'message':'user created successful'},status=status.HTTP_201_CREATED)
    return Response({
      'error':'check your fields', 'errors':user_serializer.errors
      }, status=status.HTTP_400_BAD_REQUEST)

  def retrieve(self, request, pk=None):
    user = self.get_object(pk)
    user_serializer = self.serializer_class(user)
    return Response(user_serializer.data)


  def update(self, request, pk=None):
    user = self.get_object(pk)
    user_serializer = UpdateUserSerializer(user, data=request.data)
    if user_serializer.is_valid():
      user_serializer.save()
      return Response({'message':'user updated successful'})
    return Response({
      'error':'check your fields', 'errors':user_serializer.errors
      }, status=status.HTTP_400_BAD_REQUEST)

  def destroy(self, request, pk=None):
    user_destroy = UserListSerializer.Meta.model.objects.filter(id=pk).update(is_active=False)
    if user_destroy == 1:
      return Response({'message':'user deactivate successful'})
    return Response({'error':'user not found'}, status=status.HTTP_404_NOT_FOUND)
