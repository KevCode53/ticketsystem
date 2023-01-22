from rest_framework import serializers

from apps.tickets.models import Tickets, ImagesTicket
from apps.tickets.api.serializers.images_tickets_serializers import ImagesTicketSerializer
from apps.users.api.serializers.user_serializers import CustomUserSerializer


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        fields = '__all__'


class ListTicketSerializer(serializers.ModelSerializer):

    images = serializers.StringRelatedField(many=True)
    # requesting_by = CustomUserSerializer(read_only=True)

    class Meta:
        model = Tickets
        fields = (
            'id', 'created', 'updated', 'state',
            'description', 'service', 'created_by',
            'updated_by', 'requesting_by', 'assigned_to', 'images'
        )


class CreateTicketSerializer(serializers.ModelSerializer):
    images = ImagesTicketSerializer(many=True, read_only=True)
    upload_images = serializers.ListField(
        child=serializers.ImageField(
            max_length=100000000, allow_empty_file=False, use_url=False),
        write_only=True
    )

    class Meta:
        model = Tickets
        fields = ('id', 'service', 'description', 'state',
                  'requesting_by', 'assigned_to', 'assigned_to', 'upload_images', 'images')

    def create(self, validated_data):
        """ Create a new Ticket """
        upload_images = validated_data.pop('upload_images')
        ticket = Tickets.objects.create(**validated_data)
        for image in upload_images:
            new_image_ticket = ImagesTicket.objects.create(
                ticket=ticket, image=image)
        return ticket


class UpdateAssignedTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        fields = ('assigned_to',)

    def update(self, instance, validated_data):
        instance.assigned_to = validated_data.get(
            'assigned_to', instance.assigned_to)
        instance.save()
        return instance

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'created': instance.created,
            'requesting_by': instance.requesting_by.username,
            'assigned_to': instance.assigned_to.username,
            'service': instance.service,
            'description': instance.description
        }
