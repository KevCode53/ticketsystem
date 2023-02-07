from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework import pagination

from apps.tickets.api.serializers.ticket_serialziers import (
    TicketSerializer, CreateTicketSerializer, ListTicketSerializer,
    UpdateAssignedTicketSerializer, HistoricalTicketSerializers, DetailTicketSerializer)
from apps.tickets.api.serializers.images_tickets_serializers import ImagesTicketSerializer

class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 20

class CustomLimitOffsetPagination(pagination.LimitOffsetPagination):
    default_limit = 5
    max_limit = 20


class TicketViewSet(viewsets.GenericViewSet):
    serializer_class = TicketSerializer
    # permission_classes = (IsAuthenticated, )
    pagination_class = StandardResultsSetPagination
    # pagination_class = CustomLimitOffsetPagination

    def get_queryset(self, pk=None):
        if self.queryset is None:
            return self.serializer_class().Meta.model.objects.all()
        return self.queryset

    def get_object(self, pk):
        return get_object_or_404(self.serializer_class.Meta.model, pk=pk)

    def list(self, request):
        tickets = self.get_queryset()
        paginator = self.pagination_class()

        if 'items' in request.GET:
            items = request.GET['items']
            paginator.page_size = items
        
        tickets_paginated = paginator.paginate_queryset(tickets, request)
        tickets_serializer = ListTicketSerializer(tickets_paginated, many=True)
        return paginator.get_paginated_response(tickets_serializer.data)

    def retrieve(self, request, pk=None):
        ticket = self.get_object(pk)
        ticket_serializer = DetailTicketSerializer(ticket)
        return Response(ticket_serializer.data)

    def create(self, request):
        ticket = self.request.data
        ticket_serializer = CreateTicketSerializer(data=ticket)

        if ticket_serializer.is_valid():
            ticket_serializer.save()
            return Response(ticket_serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': ticket_serializer.errors}, status=status.HTTP_409_CONFLICT)

    @action(detail=False, methods=['put'])
    def ticket_assignment(self, request, pk=None):
        ticket = self.get_object(request.data['pk'])
        ticket_serializer = UpdateAssignedTicketSerializer(
            ticket, data=request.data)
        if ticket_serializer.is_valid():
            ticket_serializer.save()
            return Response({'message': 'The ticket has been assigned', 'ticket': ticket_serializer.data})
        return Response({'error': 'Ticket assignment error'}, status=status.HTTP_409_CONFLICT)

    @action(detail=False, methods=['get'])
    def ticket_history(self, request, pk=None):
        ticket = self.get_object(request.data['pk'])
        ticket_serializer = HistoricalTicketSerializers(ticket)
        return Response(ticket_serializer.data)
        return Response({'error': ticket_serializer.errors}, status=status.HTTP_409_CONFLICT)

