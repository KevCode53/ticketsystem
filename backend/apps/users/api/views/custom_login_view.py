from datetime import datetime

from django.contrib.sessions.models import Session

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView

# from apps.users.api.serializers.user_serializer import UserTokenSerializer

# CUSTOM LOGIN VIEWS

class Login(ObtainAuthToken):

  def post(self, request, *args, **kwargs):
    print(request.user)
    login_serializer = self.serializer_class(data = request.data, context = {'request':request})
    # Validate the User send in request is valid
    if login_serializer.is_valid():
      user = login_serializer.validated_data['user']
      # Validate the user is active
      if user.is_active:
        # Create o get a token
        token, created = Token.objects.get_or_create(user=user)
        # Convert the user in serializer
        user_serializer = UserTokenSerializer(user)
        # Validates if the token has been created
        if created:
          # Returns the token, user and message
          return Response({
            'token':token.key,
            'user': user_serializer.data,
            'message': 'login successful'
            } ,status=status.HTTP_201_CREATED)
        # if the token exists
        else:

          '''
          all_sessions = Session.objects.filter(expire_date__gte = datetime.now())
          if all_sessions.exists():
            for session in all_sessions:
              session_data = session.get_decoded()
              if user.id == int(session_data.get('_auth_user_id')):
                session.delete()

          token.delete()
          token = Token.objects.create(user=user)
          # Returns the token, user and message
          return Response({
            'token':token.key,
            'user': user_serializer.data,
            'message': 'login successful'
            } ,status=status.HTTP_201_CREATED)
          '''

          token.delete()
          return Response({'error':'This user already has an active session'}, status=status.HTTP_409_CONFLICT)

      # If the user is not active
      else:
        return Response({'error':"This user can't login"} , status=status.HTTP_401_UNAUTHORIZED)
    # If the credentials are not valid
    else:
        return Response({'error':"wrong credentials, please try again"} , status=status.HTTP_400_BAD_REQUEST)


class Logout(APIView):

  def get(self, request, *args, **kwargs):
    try:
      token = request.GET.get('token')
      print(token)
      token = Token.objects.filter(key = token).first()

      if token:
        user = token.user

        # Delete all session for user
        all_sessions = Session.objects.filter(expire_date__gte = datetime.now())
        if all_sessions.exists():

          for session in all_sessions:
            session_data = session.get_decoded()
            # search auth_user_id, this field is primary_key's user on the session
            if user.id == int(session_data.get('_auth_user_id')):
              session.delete()

        # delete user token
        token.delete()

        session_message = "This user's sessions were deleted"
        token_message = 'The token has been removed'
        return Response({
          'token_message': token_message,
          'session_message':session_message
          }, status = status.HTTP_200_OK)

      return Response({'error': 'The token sent is not valid'}, status=status.HTTP_400_BAD_REQUEST)
    except:
      return Response({'error': 'A token has not been sent for this request'}, status=status.HTTP_409_CONFLICT)
