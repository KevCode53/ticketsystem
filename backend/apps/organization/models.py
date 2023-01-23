from django.db import models
from django.utils.translation import gettext as _


# Create your models here.

def organizationImage_directory_path(instance, filename):
    return 'organization_{0}/{1}/images/{2}'.format(instance.pk, instance.name, filename)

class Organization(models.Model):
  """Model definition for Organization."""

  # TODO: Define fields here
  name = models.CharField(_('Name'), max_length=250)
  logo = models.ImageField(_('Logo'), upload_to=organizationImage_directory_path, blank=True, null=True)
  address = models.CharField(_('Address'), max_length=250)
  phone = models.CharField(_('Phone'), max_length=250)
  view = models.TextField(_('View'))
  mission = models.TextField(_('Mission'))

  class Meta:
    """Meta definition for Organization."""

    verbose_name = 'Organization'
    verbose_name_plural = 'Organizations'

  def __str__(self):
    """Unicode representation of Organization."""
    return '%s' % (self.name)


  # TODO: Define custom methods here
