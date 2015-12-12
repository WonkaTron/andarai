from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics
from models import DangerLevel
from serializers import DangerLevelSerializer
# Create your views here

class Index(TemplateView):
    template_name = 'safedirections/index.html'

class DangerList(generics.ListCreateAPIView):
    queryset = DangerLevel.objects.all()
    serializer_class = DangerLevelSerializer

class DangerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DangerLevel.objects.all()
    serializer_class = DangerLevelSerializer


