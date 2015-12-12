from __future__ import unicode_literals

from django.db import models

radius = 20 #metros
# Create your models here.
class DangerLevel(models.Model):
    latlng = models.CharField(max_length=255)
    last_decay_date = models.DateTimeField(auto_now_add=True)
    danger_zero = models.IntegerField(default=0)
    danger_one = models.IntegerField(default=0)
    danger_two = models.IntegerField(default=0)
    danger_three = models.IntegerField(default=0)

    def calculteDangerLevel(self):
        return 8000000

    def updateDecayDate(self, newdate):
        pass