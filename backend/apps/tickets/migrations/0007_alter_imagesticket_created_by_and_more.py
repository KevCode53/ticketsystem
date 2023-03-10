# Generated by Django 4.1.5 on 2023-01-21 03:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tickets', '0006_alter_tickets_assigned_to'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagesticket',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='created_by%(app_label)s_%(class)s_related', to=settings.AUTH_USER_MODEL, verbose_name='Created by'),
        ),
        migrations.AlterField(
            model_name='imagesticket',
            name='updated_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='updated_by%(app_label)s_%(class)s_related', to=settings.AUTH_USER_MODEL, verbose_name='Updated by'),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='created_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='created_by%(app_label)s_%(class)s_related', to=settings.AUTH_USER_MODEL, verbose_name='Created by'),
        ),
        migrations.AlterField(
            model_name='tickets',
            name='updated_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='updated_by%(app_label)s_%(class)s_related', to=settings.AUTH_USER_MODEL, verbose_name='Updated by'),
        ),
    ]
