from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from apps.tickets.api.serializers.ticket_serialziers import TicketSerializer, CreateTicketSerializer, ListTicketSerializer
from apps.tickets.api.serializers.images_tickets_serializers import ImagesTicketSerializer


class ImageTicketViewSet(viewsets.ModelViewSet):
    serializer_class = ImagesTicketSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self, pk=None):
        if self.queryset is None:
            return self.serializer_class().Meta.model.objects.all()
        return self.queryset
