from models import DangerLevel
from rest_framework import serializers

class DangerLevelSerializer(serializers.ModelSerializer):

    danger_level = serializers.SerializerMethodField()

    class Meta:
        model = DangerLevel
        fields = ('id', 'latlng', 'danger_level', 'danger_zero', 'danger_one', 'danger_two', 'danger_three')
        extra_kwargs = {
            'danger_zero': {'write_only': True},
            'danger_one': {'write_only': True},
            'danger_two': {'write_only': True},
            'danger_three': {'write_only': True},
        }

    def get_danger_level(self, obj):
        return obj.calculateDangerLevel()