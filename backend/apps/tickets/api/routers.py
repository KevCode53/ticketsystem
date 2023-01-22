from rest_framework.routers import DefaultRouter

from apps.tickets.api.views.ticket_views import TicketViewSet
from apps.tickets.api.views.image_ticket_views import ImageTicketViewSet

router = DefaultRouter()

router.register('', TicketViewSet, basename='tickets')
# router.register('images', ImageTicketViewSet, basename='image_ticket')

urlpatterns = router.urls
