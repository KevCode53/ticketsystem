from django.db import models
from django.utils.translation import gettext as _
from apps.core.models import BaseModel

from apps.users.models import User

# Create your models here.



def ticketImage_directory_path(instance, filename):
    return 'ticket_{0}/images/{1}'.format(instance.ticket, filename)


class Tickets(BaseModel):
    """Model definition for Tickets."""

    STATES = [
        (-1, _('refused')),
        (0, _('created')),
        (1, _('assigned')),
        (2, _('in_Process')),
        (3, _('finalized')),
    ]

    # TODO: Define fields here
    requesting_by = models.ForeignKey(User, verbose_name=_(
        'Requesting by'), on_delete=models.CASCADE, related_name='requesting_by%(app_label)s_%(class)s_related')
    assigned_to = models.ForeignKey(User, verbose_name=_(
        'Assigned to'), on_delete=models.CASCADE, related_name='assigned_to%(app_label)s_%(class)s_related', blank=True, null=True)
    state = models.PositiveSmallIntegerField(
        _('State'), choices=STATES, default=0)
    description = models.TextField(_('Description'))
    service = models.CharField(_('Service'), max_length=255)

    class Meta:
        """Meta definition for Ticket."""
        verbose_name = 'Tickets'
        verbose_name_plural = 'Tickets'

    def __str__(self):
        """Unicode representation of Tickets."""
        return '%s - %s %s' % (self.pk, self.created, self.requesting_by)

    # TODO: Define custom methods here

    def word_state(self):
        if self.state == -1:
            return 'refused'
        elif self.state == 0:
            return 'created'
        elif self.state == 1:
            return 'assigned'
        elif state == 2:
            return 'in_process'
        else:
            return 'finalized'


class ImagesTicket(BaseModel):
    """Model definition for Files."""

    # TODO: Define fields here
    ticket = models.ForeignKey(Tickets, verbose_name=_(
        'Tickets'), on_delete=models.CASCADE, related_name=_('images'))
    image = models.ImageField(
        _('Image'), upload_to=ticketImage_directory_path, blank=True, null=True)

    class Meta:
        """Meta definition for Files."""

        verbose_name = 'Images Ticket'
        verbose_name_plural = 'Image Tickets'

    def __str__(self):
        """Unicode representation of Files."""
        return self.image.url

    # TODO: Define custom methods here


class AssignmentHistory(BaseModel):
    """Model definition for TimeLineTicket."""

    # TODO: Define fields here
    ticket = models.ForeignKey(
        Tickets, on_delete=models.CASCADE, verbose_name=_('Ticket'),
        related_name='previus_designee')
    previus_designee = models.ForeignKey(
        User, verbose_name= _('Previus designee'), related_name='previus_designee',
        blank=True, null=True, on_delete=models.CASCADE)
    assigned_to = models.ForeignKey(
        User, verbose_name= _('Assigned to'), related_name='assigned_to',
        blank=True, null=True, on_delete=models.CASCADE)
    reason = models.TextField(_('Reason'))

    class Meta:
        """Meta definition for TimeLineTicket."""

        verbose_name = _('Assignment History')
        verbose_name_plural = _('Assignments History')

    def __str__(self):
        """Unicode representation of TimeLineTicket."""
        return '%s' % (self.created)

    # TODO: Define custom methods here
