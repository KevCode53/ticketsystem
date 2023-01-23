from django.db.models.signals import post_save
from apps.tickets.models import Tickets, AssignmentHistory
from django.dispatch import receiver


@receiver(post_save, sender=Tickets)
def ticket_assignment(sender, instance, created, **kwargs):
  last_assignment = AssignmentHistory.objects.filter(ticket=instance).last()
  print(last_assignment.assigned_to)
  if not created:
    AssignmentHistory.objects.create(
      ticket = instance, 
      assigned_to=instance.assigned_to,
      reason='Assignment',
      previus_designee=last_assignment.assigned_to
    )