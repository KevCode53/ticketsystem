from datetime import datetime

from django.contrib.sessions.models import Session
from django.contrib.auth import authenticate

from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from apps.authjwt.api.serializers import CustomTokenObtainPairSerializer
from apps.users.api.serializers.user_serializers import CustomUserSerializer
from apps.users.api.serializers.profile_serializers import CustomTokenUserProfileSerializer

from apps.users.models import User, Profile

class Login(TokenObtainPairView):
  serializer_class = CustomTokenObtainPairSerializer

  def post(self, request, *args, **kwargs):
    username = request.data.get('username', '')
    password = request.data.get('password', '')

    user = authenticate(
      username=username,
      password=password
    )

    if user:
      print(self.serializer_class())
      login_serializer = self.serializer_class(data=request.data)
      if login_serializer.is_valid():
        user_serializer = CustomUserSerializer(user)
        profile = Profile.objects.filter(user=user).first()
        profile_serializer = CustomTokenUserProfileSerializer(profile)
        return Response({
          'token': login_serializer.validated_data.get('access'),
          'refresh-token': login_serializer.validated_data.get('refresh'),
          'user': user_serializer.data,
          'profile': profile_serializer.data,
          'message': 'login successful'
            } ,status=status.HTTP_201_CREATED
        )
      return Response({'error':"wrong credentials, please try again"} , status=status.HTTP_400_BAD_REQUEST)
    return Response({'error':"wrong credentials, please try again"} , status=status.HTTP_400_BAD_REQUEST)



class Logout(GenericAPIView):

  def post(self,request,*args,**kwargs):

    user = User.objects.filter(id=request.data.get('user', 0))
    if user.exists():
      RefreshToken.for_user(user.first())
      return Response({'message': 'logout successful'}, status=status.HTTP_200_OK)
    return Response({'error':"user don´t exists"} , status=status.HTTP_400_BAD_REQUEST)
