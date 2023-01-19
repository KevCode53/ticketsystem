from django.db.models.signals import post_save
from apps.users.models import Profile, User
from django.dispatch import receiver


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
  if created:
    Profile.objects.create(user=instance)
    # print('Usuario creado')

