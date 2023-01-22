from rest_framework import serializers

from apps.tickets.models import ImagesTicket


class ImagesTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagesTicket
        fields = ('ticket', 'image')
