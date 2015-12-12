from models import DangerLevel
from rest_framework import serializers

class DangerLevelSerializer(serializers.ModelSerializer):

    class Meta:
        model = DangerLevel
        fields = ('id', 'latlng', 'danger_zero', 'danger_one', 'danger_two', 'danger_three')