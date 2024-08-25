# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


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
        