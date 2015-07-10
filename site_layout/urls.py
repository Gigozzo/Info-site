from django.conf.urls import patterns, include, url

from django.contrib import admin
from django.views.generic import TemplateView
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'site_layout.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', TemplateView.as_view(template_name='main.html')),
    url(r'^contact/', TemplateView.as_view(template_name='contact.html')),
    url(r'^news/', TemplateView.as_view(template_name='news.html')),
    url(r'^services/', TemplateView.as_view(template_name='services.html')),

    url(r'^admin/', include(admin.site.urls)),
)
