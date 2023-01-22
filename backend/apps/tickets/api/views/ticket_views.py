from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from apps.tickets.api.serializers.ticket_serialziers import (
    TicketSerializer, CreateTicketSerializer, ListTicketSerializer,
    UpdateAssignedTicketSerializer)
from apps.tickets.api.serializers.images_tickets_serializers import ImagesTicketSerializer


class TicketViewSet(viewsets.GenericViewSet):
    serializer_class = TicketSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self, pk=None):
        if self.queryset is None:
            return self.serializer_class().Meta.model.objects.all()
        return self.queryset

    def get_object(self, pk):
        return get_object_or_404(self.serializer_class.Meta.model, pk=pk)

    def list(self, request):
        tickets = self.get_queryset()
        tickets_serializer = ListTicketSerializer(tickets, many=True)
        return Response(tickets_serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        ticket = self.request.data
        ticket_serializer = CreateTicketSerializer(data=ticket)
        print(type(ticket))
        message_images = {}

        if ticket_serializer.is_valid():
            ticket_serializer.save()
            return Response(ticket_serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': ticket_serializer.errors}, status=status.HTTP_409_CONFLICT)

    @action(detail=True, methods=['put'])
    def ticket_assignment(self, request, pk=None):
        ticket = self.get_object(pk)
        ticket_serializer = UpdateAssignedTicketSerializer(
            ticket, data=request.data)
        if ticket_serializer.is_valid():
            ticket_serializer.save()
            return Response({'message': 'The ticket has been assigned', 'ticket': ticket_serializer.data})
        return Response({'error': 'Ticket assignment error'}, status=status.HTTP_409_CONFLICT)
