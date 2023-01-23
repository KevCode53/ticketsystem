from django.apps import AppConfig


class TicketsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.tickets'

    def ready(self):
        import apps.tickets.signals.create_ticket
        import apps.tickets.signals.ticket_assignment