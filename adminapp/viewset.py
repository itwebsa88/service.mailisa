from django.http import JsonResponse
from .models import *
from django.contrib.auth.decorators import login_required
from . import forms
from django.shortcuts import render, redirect
from rest_framework import status
from rest_framework.response import Response
from datetime import datetime, timedelta
import json


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

def bankOperation(request):
    type = request.GET.get('operation')
    if type == 'edit':
        obj = Bank.objects.get(id=request.GET.get('id'))
        form = forms.BankEdit(instance=obj)
    elif type == 'add':
        form = forms.BankAdd()
    context = {'form': form, 'type': type }
    return render(request, "management/addbank.html", context)

def bankSave(request):
    try:
        if request.method == 'POST':
            if request.POST['id']:
                form = Bank.objects.filter(id=request.POST['id']).first()
            else:
                form = Bank()
                form.uid = request.POST['uid']
            form.name = request.POST['name']
            form.bankid = request.POST['bankid']
            form.bankinfo = request.POST['bankinfo']
            form.save()
            print("khong loi")
        return JsonResponse({'code': 200, 'msg': ""})
    except Exception as e:
        print(e)


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
    key = request.GET.get('key')

    type = request.GET.get('type')
    username = request.GET.get('username')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = LotteryHis.objects.filter(create_time__gt=datetime.now())
    if key is not None:
        obj = obj.filter(key=key)
    obj = obj[:200]
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)


@login_required(login_url="/login/")
def lotteryhis(request):
    page = int(request.GET.get('page'))
    limit = int(request.GET.get('limit'))
    key = request.GET.get('key')
    expect = request.GET.get('expect')
    start_time = request.GET.get('start_time')
    end_time = request.GET.get('end_time')
    obj = LotteryHis.objects.filter(create_time__lt=datetime.now())
    print(key, expect)
    if (key is not None) & (key != ""):
        print(1)
        obj = obj.filter(key=key)
    if (expect is not None) & (expect != ""):
        print(expect)
        obj = obj.filter(expect=expect)
    obj = obj.order_by('-create_time')[:200]
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
def doeditstatus(request):
    if request.method == 'POST':
        objs = Member.objects.filter(id=request.POST['id']).first()
        if not objs:
            return Response({}, status=status.HTTP_404_NOT_FOUND)
        objs.status = request.POST['status']
        objs.save()
    else:
        return Response({}, status=status.HTTP_404_NOT_FOUND)
    data = {"code": 200, "msg": "Thành Công"}
    return JsonResponse(data)


@login_required(login_url="/login/")
def doaddmoney(request):
    if request.method == 'POST':
        objs = Member.objects.filter(id=request.POST['id']).first()
        if not objs:
            return JsonResponse({"code": 404, "msg": ""})
        objs.money += int(request.POST['money'])
        objs.save()
    else:
        return JsonResponse({"code": 503, "msg": ""})
    data = {"code": 200, "msg": ""}
    return JsonResponse(data)


@login_required(login_url="/login/")
def memberdel(request):
    print(request.POST)
    if request.method == 'POST':
        form = Member.objects.get(id=request.POST['id'])
        form.delete()
    return JsonResponse(status=200, data={'code': 200, 'msg': "Thành công"})

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
    obj = Withdrawal.objects.filter(status=1)
    objpagnation = obj[((page - 1) * limit):(page * limit)]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(obj)}
    return JsonResponse(data)

@login_required(login_url="/login/")
def acceptwithdrawal(request):
    try:
        if request.method == 'POST':
            objs = Withdrawal.objects.filter(id=request.GET.get('id')).first()
            print(objs)
            if not objs:
                return Response({}, status=status.HTTP_404_NOT_FOUND)
            objs.status = request.POST['status']
            objs.desc = request.POST['desc']
            objs.save()
        else:
            return Response({}, status=status.HTTP_404_NOT_FOUND)
        data = {"code": 200, "msg": ""}
        return JsonResponse(data)
    except Exception as e:
        print(e)



@login_required(login_url="/login/")
def withdrawal_list(request):
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


def addmoney(request):
    mydict = {}
    form = forms.addMoney()
    mydict['form'] = form
    mydict['id'] = request.GET.get('id')
    return render(request, "member/addmoney.html", mydict)


def addmember(request):
    form = forms.editMember()
    context = {'form': form}
    print(context)
    return render(request, "member/add.html", context)


def delmember(request):
    pass


def editmember(request):
    obj = Member.objects.get(id=request.GET.get('id'))
    form = forms.editMember(instance=obj)
    context = {'form': form, 'id': request.GET.get('id')}
    print(context)
    return render(request, "member/edit.html", context)

def dosave(request):
    if request.method == 'POST':
        print(request.POST)
        if request.POST['id']:
            print('query')
            form = Member.objects.filter(id=request.POST['id']).first()
        else:  
            form = Member()
        form.uid = request.POST['uid']
        form.username = request.POST['username']
        form.money = request.POST['money']
        form.name = request.POST['name']
        form.num = request.POST['num']
        form.min = request.POST['min']
        form.max = request.POST['max']
        if len(request.POST['password']) >= 6:
            form.password = request.POST['password']
        if len(request.POST['paypassword']) >= 6:
            form.paypassword = request.POST['paypassword']
        form.save()
    return JsonResponse({'code': 200, 'msg': ""})

def viewmember(request):
    pass


@login_required(login_url="/login/")
def lottery_edit(request):
    obj = LotteryHis.objects.get(id=request.GET.get('id'))
    form = forms.LotteryHis(instance=obj)
    context = {'form': form, 'id': obj.id}
    return render(request, "lottery/edit.html", context)


@login_required(login_url="/login/")
def lotterydosave(request):
    print(request.POST)
    if request.method == 'POST':
        form = LotteryHis.objects.get(id=request.POST['id'])
        form.opencode = request.POST['opencode']
        form.yukiangjiang = request.user.username
        form.is_yukaijiang = 1
        form.save()
    return JsonResponse(status=200, data={'code': 200, 'msg': "Thành công"})

def agentOp(request):
    op = request.GET['operation']
    mydict = {}
    if op == "add":
        form = forms.Agent()
    elif op == "edit":
        obj = Agent.objects.get(id=request.GET['id'])
        form = forms.AgentEdit(instance=obj)
        mydict['id'] = request.GET['id']

    mydict['form'] = form
    return render(request, "agent/operation.html", mydict)


@login_required(login_url="/login/")
def agentstatus(request):
    if request.method == 'POST':
        objs = Agent.objects.filter(id=request.POST['id']).first()
        if not objs:
            return Response({}, status=status.HTTP_404_NOT_FOUND)
        objs.status = request.POST['status']
        objs.save()
    else:
        return Response({}, status=status.HTTP_404_NOT_FOUND)
    data = {"code": 200, "msg": "Thành công"}
    return JsonResponse(data)

@login_required(login_url="/login/")
def agentdosave(request):
    print(request.POST)
    if request.method == 'POST':
        if request.POST['id']:
            form = Agent.objects.get(id=request.POST['id'])
        else:
            form = Agent()
            form.username = request.POST['username']
            form.password = request.POST['password']
            form.status = 1

        form.code = request.POST['code']
        form.rid = request.POST['code']
        form.save()
    return JsonResponse(status=200, data={'code': 200, 'msg': "Thành công"})

@login_required(login_url="/login/")
def agentdel(request):
    print(request.POST)
    if request.method == 'POST':
        form = Agent.objects.get(id=request.POST['id'])
        form.delete()
    return JsonResponse(status=200, data={'code': 200, 'msg': "Thành công"})



def lotterycurrent(request):
    key = request.GET.get('id')
    match key:
        case 1:
            name = "Xác thực 1"
        case 2:
            name = "Xác thực 2"
        case 3:
            name = "Xác thực 3"
        case 4:
            name = "Xác thực 4"
        case _:
            name = "Xác thực 1"
    
    obj = LotteryHis.objects.filter(create_time__lt=(datetime.now() + timedelta(minutes=3)), create_time__gt=datetime.now())
    if name:
        obj = obj.filter(name=name)
    objpagnation = obj
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values_list("expect", "opencode")),
            "count": len(obj)}
    return JsonResponse(data)


def lotterylast(request):
    key = request.GET.get('id')
    match key:
        case 1:
            name = "Xác thực 1"
        case 2:
            name = "Xác thực 2"
        case 3:
            name = "Xác thực 3"
        case 4:
            name = "Xác thực 4"
        case _:
            name = "Xác thực 1"
    obj = LotteryHis.objects.filter(create_time__lt=datetime.now(), create_time__gt=(datetime.now() - timedelta(minutes=30)))
    if name:
        obj = obj.filter(name=name)
    objpagnation = obj[:10]
    data = {"code": 0, "msg": "",
            "data": list(objpagnation.values()),
            "count": len(objpagnation)}
    return JsonResponse(data)