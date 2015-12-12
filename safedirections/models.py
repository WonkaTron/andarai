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

    def calculateDangerLevel(self):
        danger_level = 0
        votes = 0
        if self.danger_zero > votes:
            votes = self.danger_zero
            danger_level = 0
        if self.danger_one > votes:
            votes = self.danger_one
            danger_level = 1
        if self.danger_two > votes:
            votes = self.danger_two
            danger_level = 2
        if self.danger_three > votes:
            votes = self.danger_three
            danger_level = 3
        return danger_level

    def updateDecayDate(self, newdate):
        pass