# Generated by Django 4.1.5 on 2023-01-21 03:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0004_rename_files_imagesticket_alter_imagesticket_options'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tickets',
            name='images',
        ),
        migrations.AddField(
            model_name='imagesticket',
            name='ticket',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='tickets.tickets', verbose_name='Tickets'),
            preserve_default=False,
        ),
    ]