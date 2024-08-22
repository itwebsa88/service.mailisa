from django.http import JsonResponse
from .models import *


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
