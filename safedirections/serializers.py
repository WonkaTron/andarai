from models import DangerLevel
from rest_framework import serializers

class DangerLevelSerializer(serializers.ModelSerializer):

    danger_level = serializers.SerializerMethodField()

    class Meta:
        model = DangerLevel
        fields = ('id', 'latlng', 'danger_level')

    def get_danger_level(self, obj):
        return obj.calculateDangerLevel()