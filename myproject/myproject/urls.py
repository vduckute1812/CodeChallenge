"""myproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.contrib.auth import views as auth_views

from boards import views as board_views
from accounts import views as account_views

urlpatterns = [
    path('admin/', admin.site.urls),

    # Content
    path('', board_views.BoardListView.as_view(), name="home"),
    re_path(r'^boards/(?P<pk>\d+)/$', board_views.board_topics, name='board_topics'),
    re_path(r'^boards/(?P<pk>\d+)/new/$', board_views.new_topic, name='new_topic'),
    re_path(r'^boards/(?P<pk>\d+)/topics/(?P<topic_pk>\d+)/reply/$', board_views.reply_topic, name='reply_topic'),
    re_path(r'^boards/(?P<pk>\d+)/topics/(?P<topic_pk>\d+)/$', board_views.topic_posts, name='topic_posts'),
    path('new_post/', board_views.NewPostView.as_view(), name='new_post'),
    re_path(r'^boards/(?P<pk>\d+)/topics/(?P<topic_pk>\d+)/posts/(?P<post_pk>\d+)/edit/$', 
                    board_views.UpdatePostView.as_view(), name='edit_post'),
    # Auth function
    path('signup/', account_views.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),

    # Reset password
    path('reset/',
        auth_views.PasswordResetView.as_view(
            template_name='password_reset.html',
            email_template_name='password_reset_email.html',
            subject_template_name='password_reset_subject.txt'
        ), 
        name='password_reset'
    ),
    path('reset/done/',
        auth_views.PasswordResetDoneView.as_view(
            template_name='password_reset_done.html'
        ), 
        name='password_reset_done'
    ),
    path('reset/complete/',
        auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'),
        name='password_reset_complete'
    ),
    re_path(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
            auth_views.PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html'),
            name='password_reset_confirm'
    ),

    # Change password
    path('settings/password/',
        auth_views.PasswordChangeView.as_view(template_name='password_change.html'),
        name='password_change'
    ),
    path('settings/password/done/',
        auth_views.PasswordChangeDoneView.as_view(template_name='password_change_done.html'),
        name='password_change_done'
    ),
]
