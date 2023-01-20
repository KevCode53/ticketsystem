from django.urls import path, include

from apps.users.api.views.auth_views import Login, Logout

urlpatterns = [
    path('login', Login.as_view(), name='Login'),
    path('logout', Logout.as_view(), name='Logout'),
]