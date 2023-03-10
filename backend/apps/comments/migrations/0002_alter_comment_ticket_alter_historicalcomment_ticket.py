# Generated by Django 4.1.5 on 2023-01-23 00:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0014_alter_assignmenthistory_options_and_more'),
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='ticket',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tickets.tickets', verbose_name='comments'),
        ),
        migrations.AlterField(
            model_name='historicalcomment',
            name='ticket',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='tickets.tickets', verbose_name='comments'),
        ),
    ]
