from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics
from models import DangerLevel
from serializers import DangerLevelSerializer
import json
# Create your views here

class Index(TemplateView):
    template_name = 'safedirections/index.html'

class DangerList(generics.ListCreateAPIView):
    queryset = DangerLevel.objects.all()
    serializer_class = DangerLevelSerializer

    def get(self, request, *args, **kwargs):
        response = self.list(request, *args, **kwargs)
        for marker in response.data:
            marker['latlng'] = json.loads(marker['latlng'])
        return response

class DangerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DangerLevel.objects.all()
    serializer_class = DangerLevelSerializer

    def get(self, request, *args, **kwargs):
        response = self.retrieve(request, *args, **kwargs)
        response.data['latlng'] = json.loads(response.data['latlng'])
        return response
