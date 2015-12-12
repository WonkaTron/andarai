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

    def update(self, instance, validated_data):
        instance.latlng = validated_data.get('latlng', instance.latlng)

        if validated_data.get('danger_zero') > 0:
            instance.danger_zero = instance.danger_zero + 1

        if validated_data.get('danger_one') > 0:
            instance.danger_one = instance.danger_one + 1

        if validated_data.get('danger_two') > 0:
            instance.danger_two = instance.danger_two + 1

        if validated_data.get('danger_three') > 0:
            instance.danger_three = instance.danger_three + 1

        instance.save()

        return instance