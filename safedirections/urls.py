from django.conf.urls import url, patterns
import views

urlpatterns = patterns('',
    url(r'^$', views.Index.as_view(), name='index'),
    url(r'^api/$', views.DangerList.as_view(), name='list'),
    url(r'^api/(?P<pk>\d+)/$', views.DangerDetail.as_view(), name='detail'),
)