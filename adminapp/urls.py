from django.urls import path, re_path
from . import views
from . import viewset
from . import fakedata
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('login/', views.login_view, name="login"),
    path('register/', views.register_user, name="register"),
    path("logout/", LogoutView.as_view(), name="logout"),

    # The home page
    path('', views.index, name='home'),

    # import data
    path('importdata/', views.import_data, name='importdata'),
    path('fakedata/', fakedata.test_data2, name='fakedata'),

    # query
    path('recharge', viewset.recharge),
    path('agent', viewset.agent),
    path('bank', viewset.bank),
    path('banner', viewset.banner),
    path('girl', viewset.girl),
    path('girltype', viewset.girltype),
    path('lotteryedit', viewset.lotteryedit),
    path('lotteryhis', viewset.lotteryhis),
    path('lotterylist', viewset.lotterylist),
    path('lotterytype', viewset.lotterytype),
    path('member', viewset.member),
    path('notice', viewset.notice),
    path('recharge', viewset.recharge),
    path('role', viewset.role),
    path('tickethis', viewset.tickethis),
    path('video', viewset.video),
    path('videotype', viewset.videotype),
    path('withdrawal', viewset.withdrawal),
    path('withdrawal_list', viewset.withdrawal_list),

    # method
    path('member/addmoney', viewset.addmoney, name="addmoney"),
    path('member/doaddmoney', viewset.doaddmoney, name="doaddmoney"),
    path('member/doeditstatus', viewset.doeditstatus, name="doeditstatus"),
    path('member/dosave', viewset.dosave, name="dosave"),
    path('member/edit', viewset.editmember, name="editmember"),
    path('member/add', viewset.addmember, name="addmember"),
    path('member/dodel', viewset.memberdel, name="memberdel"),

    
    # view
    # accounting
    path('accounting/recharge', views.recharge, name="recharge"),
    path('accounting/withdrawal', views.withdrawal, name="withdrawal"),
    # manage
    path('manage/withdrawal', views.withdrawal_process, name="withdrawal_process"),
    path('manage/bank', views.bank, name="bank"),
    path('withdrawal/acceptwithdrawal', viewset.acceptwithdrawal, name="acceptwithdrawal"),
    path('bank/operation', viewset.bankOperation, name="bankOperation"),
    path('bank/dosave', viewset.bankSave, name="bankSave"),
    # agent
    path('agent/index', views.agent, name="agent"),
    path('agent/role', views.role, name="role"),
    path('agent/doeditstatus', views.role, name="doeditstatus"),
    path('agent/operation', viewset.agentOp, name="operation"),
    path('agent/dosave', viewset.agentdosave, name="agentsave"),
    path('agent/dodel', viewset.agentdel, name="agentdel"),
    # path('agent/doeditstatus', viewset.agentstatus, name="doeditstatus"),
    # member
    path('member/index', views.member, name="member"),
    # lottery
    path('lottery/index', views.lottery, name="lottery"),
    path('lottery/class', views.lotteryclass, name="lotteryclass"),
    path('lottery/result', views.lotteryresult, name="lotteryresult"),
    path('lottery/history', views.lotteryhistory, name="lotteryhistory"),
    path('lottery/edit', views.lotteryedit, name="lotteryedit"),
    path('lottery/edit_lottery', viewset.lottery_edit, name="editticket"),
    path('lottery/dosave', viewset.lotterydosave, name="lotterydosave"),
    path('lottery/current', viewset.lotterycurrent, name="currentlottery"),
    path('lottery/last', viewset.lotterylast, name="lastlottery"),

    # video
    path('video/index', views.video, name="video"),
    path('video/class', views.videoclass, name="videoclass"),
    # girl
    path('girl/index', views.girl, name="girl"),
    path('girl/class', views.girlclass, name="girlclass"),
    # config
    path('config/index', views.config, name="config"),
    path('config/banner', views.banner, name="banner"),
    path('config/notice', views.notice, name="notice"),

    # Matches any html file
    # re_path(r'^.*\.*', views.pages, name='pages'),
]
