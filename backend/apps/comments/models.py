from django.db import models
from django.utils.translation import gettext as _
from apps.tickets.models import Tickets
from apps.core.models import BaseModel
from ckeditor.fields import RichTextField

# Create your models here.


class Comment(BaseModel):
  """Model definition for Comment."""

  # TODO: Define fields here
  ticket = models.ForeignKey(
      Tickets, on_delete=models.CASCADE, verbose_name=_('comments'),
      related_name=_('comments')
    )
  comment = RichTextField(verbose_name=_('Comment'))

  class Meta:
    """Meta definition for Comment."""

    verbose_name = 'Comment'
    verbose_name_plural = 'Comments'

  def __str__(self):
    """Unicode representation of Comment."""
    return '%s - %s' % (self.created, self.created_by)

  # TODO: Define custom methods here

