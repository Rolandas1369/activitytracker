from rest_framework import serializers
from construction.models import ConstructionSites


class ConstructionSitesSerializers(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    location = serializers.CharField(required=True)
    starting_at = serializers.DateField()
    started_at = serializers.DateField()
    ended_at = serializers.DateField()
    price = serializers.IntegerField()

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return ConstructionSites.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.location = validated_data.get('location', instance.location)
        instance.starting_at = validated_data.get('starting_at', instance.starting_at)
        instance.started_at = validated_data.get('started_at', instance.started_at)
        instance.ended_at = validated_data.get('ended_at', instance.ended_at)
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance
