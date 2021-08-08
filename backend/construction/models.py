from django.db import models

# Create your models here.
class ConstructionSites(models.Model):
    name = models.TextField()
    location = models.TextField()
    starting_at = models.DateField()
    started_at = models.DateField()
    ended_at = models.DateField()
    price = models.PositiveIntegerField()
