# Generated by Django 4.1.5 on 2023-01-22 21:02

import apps.organization.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, verbose_name='Name')),
                ('logo', models.ImageField(blank=True, null=True, upload_to=apps.organization.models.organizationImage_directory_path, verbose_name='Logo')),
                ('address', models.CharField(max_length=250, verbose_name='Address')),
                ('phone', models.CharField(max_length=250, verbose_name='Phone')),
                ('view', models.TextField(verbose_name='View')),
                ('mission', models.TextField(verbose_name='Mission')),
            ],
            options={
                'verbose_name': 'Organization',
                'verbose_name_plural': 'Organizations',
            },
        ),
    ]