from django.urls import path, re_path
from . import views
from . import viewset
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('login/', views.login_view, name="login"),
    path('register/', views.register_user, name="register"),
    path("logout/", LogoutView.as_view(), name="logout"),

    # The home page
    path('', views.index, name='home'),

    # import data
    path('importdata/', views.import_data, name='importdata'),

    # query
    path('recharge', viewset.recharge, name="recharge"),
    path('agent', viewset.agent, name="agent"),
    path('bank', viewset.bank, name="bank"),
    path('banner', viewset.banner, name="banner"),
    path('girl', viewset.girl, name="girl"),
    path('girltype', viewset.girltype, name="girltype"),
    path('lotteryedit', viewset.lotteryedit, name="lotteryedit"),
    path('lotteryhis', viewset.lotteryhis, name="lotteryhis"),
    path('lotterylist', viewset.lotterylist, name="lotterylist"),
    path('lotterytype', viewset.lotterytype, name="lotterytype"),
    path('member', viewset.member, name="member"),
    path('notice', viewset.notice, name="notice"),
    path('recharge', viewset.recharge, name="recharge"),
    path('role', viewset.role, name="role"),
    path('tickethis', viewset.tickethis, name="tickethis"),
    path('video', viewset.video, name="video"),
    path('videotype', viewset.videotype, name="videotype"),
    path('withdrawal', viewset.withdrawal, name="withdrawal"),
    path('withdrawal_list', viewset.withdrawal_list, name="withdrawal_list"),

    # Matches any html file
    re_path(r'^.*\.*', views.pages, name='pages'),
]
