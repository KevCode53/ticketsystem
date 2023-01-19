from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _
from apps.users.models import User, Profile

# Register your models here.

class UserAdmin(BaseUserAdmin):
  ordering = ['id']
  list_display = ('email', 'username', 'name', 'last_name', 'is_active', 'is_staff')
  fieldsets = (
    (None, {'fields': ('email', 'username', 'password')}),

    (_('Personal Info'), {'fields': ( 'name', 'last_name')}),

    (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser')}),

    (_('Important Dates'), {'fields': ('last_login',)}),
  )

  # add_fieldsets = (
  #   (None, {
  #     'classes': ('wide',),
  #     'fields': ('email', 'username', 'password1', 'password2')
  #   })
  # )

admin.site.register(User, UserAdmin)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
  list_display = ('preview_img', 'user', 'phone', 'birthday')