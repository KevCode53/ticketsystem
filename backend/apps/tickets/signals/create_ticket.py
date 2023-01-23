from django.db.models.signals import post_save
from apps.tickets.models import Tickets, AssignmentHistory
from django.dispatch import receiver


@receiver(post_save, sender=Tickets)
def create_ticket(sender, instance, created, **kwargs):
  if created:
    AssignmentHistory.objects.create(
      ticket = instance, 
      assigned_to=instance.assigned_to,
      reason='Created',
      previus_designee=None
    )
    # print('Usuario creado')
