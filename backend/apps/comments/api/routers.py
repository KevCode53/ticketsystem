from rest_framework.routers import DefaultRouter

from apps.comments.api.views import CommentViewSet

router = DefaultRouter()

router.register('', CommentViewSet, basename='comments')

urlpatterns = router.urls