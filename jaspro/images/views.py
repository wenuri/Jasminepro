from django.shortcuts import render
from django.http import HttpResponse
from .models import Image
from django.contrib.auth.models import User





def index_view(request):
    if request.method == "GET":
        if request.user.is_authenticated:
            all_images = Image.objects.all()
            return render(request,'feed.html',context={'all_images':all_images})
        else:
            return render(request,'login.html')
            ''' comments_by_user = user.comment_set.all()
                images_by_user = user.image_set.all()
                Likes_by_user = user.like_set.all()
                print(comments_by_user,images_by_user,Likes_by_user)
                return HttpResponse(f'Here are list of {user.username}')'''
        #else:
         #   return HttpResponse('Please log in.')


def explore_view(request):
    if request.method == "GET":
        if request.user.is_authenticated:
            all_users = User.objects.all()
            return render(request,'explore.html',context={'all_users':all_users})

def profile_view(request):
    if request.method == "GET":
        if request.user.is_authenticated:
            user = request.user
            return render(request,'profile.html',context={'user':user})