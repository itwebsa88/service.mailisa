# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from . import models


class LoginForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "form-control"
            }
        ))
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "form-control"
            }
        ))


class SignUpForm(UserCreationForm):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "form-control"
            }
        ))
    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={
                "placeholder": "Email",
                "class": "form-control"
            }
        ))
    password1 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "form-control"
            }
        ))
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password check",
                "class": "form-control"
            }
        ))

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')


class addMoney(forms.Form):
    money = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "name": "money",
                "class": "form-control",
                "placeholder": "Điền số dương là cộng, điền thêm dấu trừ đằng trước để trừ tiền.",
                "id": "money",
            }
        ))
    desc = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "name": "desc",
                "class": "form-control",
                "placeholder": "Nhập nội dung",
                "id": "desc",
            }
        ))
    abc = ('id', 'status', 'reason')
    type = forms.CharField(
        widget=forms.RadioSelect(
            attrs={
                "name": "type",
            }
        ))


class editMember(forms.ModelForm):
    class Meta:
        model = models.Member
        fields = ['id', 'uid', 'username', 'password', 'paypassword', 'money', 'name', 'num', 'min', 'max']
        CHOICES = {"": "Vui lòng chọn", "2": "13000000000", "3": "john520", "5": "ajie", "6": "conmeo99", "8": "adaa", "9": "admins", "10": "ada8386", "11": "tẽ123", "13": "炸塔", "14": "阿美", "15": "阿超", "16": "阿土", "17": "阿管", "18": "阿峰", "22": "榴莲", "23": "阿合", "24": "关羽", "25": "天恒", "26": "国武", "27": "阿龙", "28": "山水", "29": "achao"}
        widgets = {
            'id': forms.TextInput(attrs={'id': "id", 'name': "id"}),
            'uid': forms.Select(attrs={'id': "uid", 'name': "uid"}, choices=CHOICES),
            'username': forms.TextInput(attrs={'class': 'form-control', 'id': "username", 'name': "username", 'placeholder': "Tài khoản người dùng"}),
            'password': forms.TextInput(attrs={'class': 'form-control', 'id': "password", 'name': "password", 'placeholder': "Nhập Mật khẩu"}),
            'paypassword': forms.TextInput(attrs={'class': 'form-control', 'id': "paypassword", 'name': "paypassword", 'placeholder': "Nhập mật khẩu rút tiền"}),
            'money': forms.NumberInput(attrs={'class': 'form-control', 'id': "money", 'name': "money", 'placeholder': "Nhập số dư"}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'id': "name", 'name': "name", 'placeholder': "Nhập họ tên"}),
            'num': forms.NumberInput(attrs={'class': 'form-control', 'id': "num", 'name': "num", 'placeholder': "Nhập số lượt rút tiền"}),
            'min': forms.NumberInput(attrs={'class': 'form-control', 'id': "min", 'name': "min", 'placeholder': "Vui lòng nhập số tiền rút tối thiểu"}),
            'max': forms.NumberInput(attrs={'class': 'form-control', 'id': "max", 'name': "max", 'placeholder': "Vui lòng nhập số tiền rút tối đa"}),
        }

class BankAdd(forms.ModelForm):
    class Meta:
        model = models.Bank
        fields = ['bankid', 'bankinfo', 'username', 'name']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control', 'id': "username", 'name': "username",}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'id': "name", 'name': "name", 'placeholder': "Nhập họ tên"}),
            'bankid': forms.TextInput(attrs={'class': 'form-control', 'id': "bankid", 'name': "bankid", 'placeholder': "Vui lòng nhập số tài khoản"}),
            'bankinfo': forms.TextInput(attrs={'class': 'form-control', 'id': "bankinfo", 'name': "bankinfo", 'placeholder': "Vui lòng nhập tên ngân hàng"}),
        }

class BankEdit(forms.ModelForm):
    class Meta:
        model = models.Bank
        fields = ['uid', 'bankid', 'bankinfo', 'username', 'name']
        widgets = {
            'uid': forms.HiddenInput(attrs={'id': "uid", 'name': "uid"}),
            'username': forms.TextInput(attrs={'class': 'form-control', 'id': "username", 'name': "username", 'disabled': True}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'id': "name", 'name': "name", 'placeholder': "Nhập họ tên"}),
            'bankid': forms.TextInput(attrs={'class': 'form-control', 'id': "bankid", 'name': "bankid", 'placeholder': "Vui lòng nhập số tài khoản"}),
            'bankinfo': forms.TextInput(attrs={'class': 'form-control', 'id': "bankinfo", 'name': "bankinfo", 'placeholder': "Vui lòng nhập tên ngân hàng"}),
        }

class LotteryHis(forms.ModelForm):
    class Meta:
        model = models.LotteryHis
        fields = ["id", "name", "key", "expect", "opencode"]
        CHOICES = {"1,2":"Combo 1, Combo 2", "1,3":"Combo 1, Combo 3", "1,4":"Combo 1, Combo 4", "2,3":"Combo 2, Combo 3", "2,4":"Combo 2, Combo 4", "3,4":"Combo 3, Combo 4"}
        widgets = {
            'id': forms.HiddenInput(attrs={'id': "id", 'name': "id"}),
            'opencode': forms.Select(attrs={'id': "opencode", 'name': "opencode"}, choices=CHOICES),
        }

class Agent(forms.ModelForm):
    class Meta:
        model = models.Agent
        CHOICES = {None: "Vui lòng chọn", '25': "Quản trị viên", "26": "Cộng tác viên"}
        fields = ['username', 'password', 'code', 'rid']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control', 'id': "username", 'name': "username", 'placeholder': "Tên tài khoản"}),
            'password': forms.TextInput(attrs={'class': 'form-control', 'id': "password", 'name': "password", 'placeholder': "Vui lòng nhập mật khẩu"}),
            'code': forms.TextInput(attrs={'class': 'form-control', 'id': "code", 'name': "code", 'placeholder': "Vui lòng nhập mã mời"}),
            'rid': forms.Select(attrs={'id': "rid", 'name': "rid", 'placeholder': "Vui lòng chọn"}, choices=CHOICES),
        }

class AgentEdit(forms.ModelForm):
    class Meta:
        model = models.Agent
        CHOICES = {None: "Vui lòng chọn", 25: "Quản trị viên", 26: "Cộng tác viên"}
        fields = ['id', 'username', 'password', 'code', 'rid']
        widgets = {
            'id': forms.HiddenInput(attrs={'id': "id", 'name': "id"}),
            'username': forms.TextInput(attrs={'class': 'form-control', 'id': "username", 'name': "username", 'disabled': True}),
            'password': forms.TextInput(attrs={'class': 'form-control', 'id': "password", 'name': "password", 'placeholder': "Vui lòng nhập mật khẩu"}),
            'code': forms.TextInput(attrs={'class': 'form-control', 'id': "code", 'name': "code", 'placeholder': "Vui lòng nhập mã mời"}),
            'rid': forms.Select(attrs={'id': "rid", 'name': "rid"}, choices=CHOICES),
        }