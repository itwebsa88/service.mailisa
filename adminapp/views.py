from django.shortcuts import render, redirect, get_object_or_404
from django import template
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.template import loader
from django.urls import reverse
from django.contrib.auth import authenticate, login
from .forms import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
from .models import *

@login_required(login_url="/login/")
def import_data(request):
    if request.method == 'POST' and request.FILES['json_file']:
        json_file = request.FILES['json_file']
        data = json.load(json_file)
        for item in data:
            book = Withdrawal(
                id=item["id"],
                username=item["username"],
                name=item["name"],
                bankid=item["bankid"],
                bankinfo=item["bankinfo"],
                mid=item["mid"],
                uid=item["uid"],
                status=item["status"],
                money=item["money"],
                desc=item["desc"],
                create_time=item["create_time"],
                update_time=item["update_time"],
            )
            book.save()
        return render(request, 'success.html')
    return render(request, 'form.html')


def login_view(request):
    form = LoginForm(request.POST or None)

    msg = None

    if request.method == "POST":

        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("/")
            else:
                msg = 'Invalid credentials'
        else:
            msg = 'Error validating the form'

    return render(request, "accounts/login.html", {"form": form, "msg": msg})


def register_user(request):
    msg = None
    success = False

    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password1")
            user = authenticate(username=username, password=raw_password)

            msg = 'User created - please <a href="/login">login</a>.'
            success = True

            # return redirect("/login/")

        else:
            msg = 'Form is not valid'
    else:
        form = SignUpForm()

    return render(request, "accounts/register.html", {"form": form, "msg": msg, "success": success})


@login_required(login_url="/login/")
def index(request):
    context = {'segment': 'index'}

    html_template = loader.get_template('index/index.html')
    return HttpResponse(html_template.render(context, request))


@login_required(login_url="/login/")
def pages(request):
    context = {}
    # All resource paths end in .html.
    # Pick out the html file name from the url. And load that template.
    try:

        load_template = request.path.split('/')[-1]

        if load_template == 'admin':
            return HttpResponseRedirect(reverse('admin:index'))
        context['segment'] = load_template

        html_template = loader.get_template(load_template)
        return HttpResponse(html_template.render(context, request))

    except template.TemplateDoesNotExist:

        html_template = loader.get_template('page-404.html')
        return HttpResponse(html_template.render(context, request))

    except:
        html_template = loader.get_template('page-500.html')
        return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def recharge(request):
    context = {}
    html_template = loader.get_template('accounting/naptien.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def withdrawal(request):
    context = {}
    html_template = loader.get_template('accounting/ruttien.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def withdrawal_process(request):
    context = {}
    html_template = loader.get_template('management/ruttien.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def bank(request):
    context = {}
    html_template = loader.get_template('management/nganhang.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def agent(request):
    context = {}
    html_template = loader.get_template('agent/nhanvien.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def role(request):
    context = {}
    html_template = loader.get_template('agent/phanquyen.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def member(request):
    context = {}
    html_template = loader.get_template('member/member.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def lottery(request):
    context = {}
    html_template = loader.get_template('lottery/danhsach.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def lotteryclass(request):
    context = {}
    html_template = loader.get_template('lottery/danhmuc.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def lotteryresult(request):
    context = {}
    html_template = loader.get_template('lottery/ketqua.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def lotteryhistory(request):
    context = {}
    html_template = loader.get_template('lottery/lichsu.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def lotteryedit(request):
    context = {}
    html_template = loader.get_template('lottery/chinhsua.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def video(request):
    context = {}
    html_template = loader.get_template('video/danhsach.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def videoclass(request):
    context = {}
    html_template = loader.get_template('video/danhmuc.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def girl(request):
    context = {}
    html_template = loader.get_template('girl/danhsach.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def girlclass(request):
    context = {}
    html_template = loader.get_template('girl/danhmuc.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def config(request):
    context = {}
    html_template = loader.get_template('config/cauhinh.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def notice(request):
    context = {}
    html_template = loader.get_template('config/thongbao.html')
    return HttpResponse(html_template.render(context, request))

@login_required(login_url="/login/")
def banner(request):
    context = {}
    html_template = loader.get_template('config/banner.html')
    return HttpResponse(html_template.render(context, request))

