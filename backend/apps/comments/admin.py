from django.contrib import admin
from apps.comments.models import Comment

# Register your models here.

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
  list_fields = ('created', 'ticket', 'created_by', 'comment')
  fieldsets = (
        (None, {
            "fields": (
                ('ticket', 'comment'),
            ),
        }),
    )
