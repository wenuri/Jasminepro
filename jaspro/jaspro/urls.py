"""jaspro URL Configuration

"""
from django.contrib import admin
from django.urls import path
from images import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.index_view),
    path('discover', views.explore_view, name='explore'),
    path('profile', views.profile_view, name='profile'),
    path('admin/', admin.site.urls),] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
