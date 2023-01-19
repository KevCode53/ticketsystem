from django.db import models
from django.utils.translation import gettext as _
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from simple_history.models import HistoricalRecords
from django.contrib.auth.validators import UnicodeUsernameValidator
from apps.core.manager import UserManager
from django.utils.html import format_html

# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
  username = models.CharField(_('Username'), max_length=150, validators=[UnicodeUsernameValidator], unique=True)
  email = models.EmailField(_('Email'), max_length=150, unique=True, blank=False, null=False)
  name = models.CharField(_('Name'), max_length=150, blank=True, null=True)
  last_name = models.CharField(_('Last name'), max_length=150, blank=True, null=True)

  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)
  historical = HistoricalRecords()

  objects = UserManager()

  class Meta:
    verbose_name = _('User')
    verbose_name_plural = _('Users')

  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email', 'name', 'last_name']

  def natural_key(self):
    return self.username

  def __str__(self):
    return f'{self.username}'

  def get_full_name(self):
    if self.last_name:
      return '%s %s' % (self.name, self.last_name)
    else:
      return self.name


class Profile(models.Model):
  """Model definition for Profile."""
  user = models.OneToOneField(User, verbose_name=_('Username'), on_delete=models.CASCADE)
  phone = models.CharField(_('Phone'),max_length=15, null=True, blank=True)
  image = models.ImageField(_('User Image'), default='no-user.jpg', upload_to='profile/images', blank=True, null=True)
  address = models.CharField(_('Address'), max_length=250, null=True, blank=True)
  birthday = models.DateField(_('Birthday'), blank=True, null=True)

  # TODO: Define fields here

  class Meta:
    """Meta definition for Profile."""

    verbose_name = 'Profile'
    verbose_name_plural = 'Profiles'

  def __str__(self):
    """Unicode representation of Profile."""
    return '%s' % (self.user)

  # TODO: Define custom methods here

  def preview_img(self):
    if not self.image:
      data = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'
    else:
      data = self.image.url
      print(data)

    return format_html(
      '<img src="{}" style="object-fit:contain; border-radius: 50%; width: 30px; height:30px; border: 2px solid #fff;"/>',
      data,
    )
  preview_img.short_description = _('Image')