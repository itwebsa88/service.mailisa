from django.http import JsonResponse
from .models import *
from django.contrib.auth.decorators import login_required
from .forms import *
from django.shortcuts import render, redirect

def recharge(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Recharge.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)


def agent(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Agent.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)


def bank(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Bank.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def banner(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Banner.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def girl(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Girl.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def girltype(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = GirlType.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def lotteryedit(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = LotteryEdit.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def lotteryhis(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = LotteryHis.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def lotterylist(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = LotteryList.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def lotterytype(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = LotteryType.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def member(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Member.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def notice(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Notice.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def role(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Role.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def tickethis(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = TicketHis.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def video(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Video.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def videotype(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = VideoType.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def withdrawal(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = Withdrawal.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def withdrawal_list(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = WithdrawalList.objects.all()
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

def addmoney(request):
    mydict={}
    form = addMoney(request.POST or None , request.FILES or None)
    if form.is_valid():
        form.save()
        return redirect('/')
    mydict['form']=form
    return render(request, "member/addmoney.html", mydict)

def doaddmoney(request):
    pass
def addmember(request):
    pass
def delmember(request):
    pass
def editmember(request):
    pass
def viewmember(request):
    pass