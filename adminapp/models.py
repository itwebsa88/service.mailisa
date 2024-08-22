from django.db import models


# Create your models here.
class Recharge(models.Model):
    id = models.AutoField(primary_key=True)
    mid = models.CharField(max_length=30)
    uid = models.CharField(max_length=30)
    type = models.IntegerField(null=True)
    desc = models.CharField(max_length=200)
    money = models.IntegerField(null=True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField(null=True)


class Agent(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    status = models.IntegerField(null=True)
    code = models.CharField(max_length=200)
    rid = models.IntegerField(null=True)
    player = models.IntegerField(null=True)
    ip = models.CharField(max_length=50)
    phone = models.CharField(max_length=11)
    last_time = models.CharField(max_length=30)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField(null=True)
    role = models.CharField(max_length=30)
    area = models.CharField(max_length=30)
    membercount = models.IntegerField(null=True)


class Bank(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.IntegerField(null=True)
    bankid = models.CharField(max_length=30, blank=True, null=True)
    bankinfo = models.CharField(max_length=30, blank=True, null=True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField(null=True)
    username = models.CharField(max_length=30, null=True)
    name = models.CharField(max_length=30, null=True)


class Banner(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    url = models.CharField(max_length=200, null=True)
    status = models.IntegerField(null=True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField(null=True)


class Girl(models.Model):
    id = models.AutoField(primary_key=True)
    xuanfei_name = models.CharField(max_length=30)
    img_url = models.CharField(max_length=200, null=True)
    class_id = models.IntegerField(null=True)
    name = models.CharField(max_length=30, null=True)
    vod_pic = models.CharField(max_length=200)


class GirlType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    count = models.IntegerField()
    add_time = models.DateTimeField(auto_now_add=True)


class LotteryEdit(models.Model):
    key = models.CharField(max_length=30)
    name = models.CharField(max_length=30, null=True)
    expect = models.CharField(max_length=30)
    opencode = models.CharField(max_length=10)
    create_time = models.DateTimeField(auto_now_add=True)


class LotteryHis(models.Model):
    id = models.AutoField(primary_key=True)
    key = models.CharField(max_length=30)
    name = models.CharField(max_length=30, null=True)
    expect = models.CharField(max_length=30)
    opencode = models.CharField(max_length=10)
    is_yukaijiang = models.IntegerField()
    yukiangjiang = models.CharField(max_length=200)
    cid = models.CharField(max_length=200)
    rule = models.CharField(max_length=200)
    next_opentime = models.DateTimeField(auto_now_add=True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField(null=True)


class LotteryList(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    status = models.IntegerField(null=True)
    rule = models.CharField(max_length=10)
    cid = models.CharField(max_length=200)
    condition = models.CharField(max_length=10)
    hot = models.CharField(max_length=30)


class LotteryType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    status = models.IntegerField(null=True)
    sort = models.CharField(max_length=10)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField(null=True)
    count = models.IntegerField()


class Member(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=100)
    status = models.IntegerField(null=True)
    money = models.DecimalField(max_digits=10, decimal_places=2)
    amount_code = models.DecimalField(max_digits=10, decimal_places=2)
    phone = models.CharField(max_length=30, null=True)
    name = models.CharField(max_length=50)
    sex = models.CharField(max_length=50)
    paypassword = models.CharField(max_length=100)
    header_img = models.CharField(max_length=50)
    uid = models.IntegerField()
    ip = models.CharField(max_length=50)
    last_time = models.DateTimeField(auto_now_add=True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField()
    num = models.IntegerField()
    min = models.IntegerField()
    max = models.IntegerField()
    is_online = models.IntegerField()
    role = models.CharField(max_length=30)
    area = models.CharField(max_length=30)
    daili = models.CharField(max_length=30)


class Notice(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    status = models.IntegerField(null=True)
    text = models.TextField()
    hot = models.IntegerField()
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField()


class Role(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    role = models.CharField(max_length=255)
    count = models.IntegerField()
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField()


class TicketHis(models.Model):
    pass


class Video(models.Model):
    id = models.AutoField(primary_key=True)
    vod_name = models.CharField(max_length=30)
    vod_pic = models.CharField(max_length=255)
    vod_play_url = models.CharField(max_length=255)
    vod_status = models.IntegerField()
    vod_duration = models.CharField(max_length=30)
    vod_score_num = models.IntegerField()
    vod_class_id = models.IntegerField()
    vod_hot = models.IntegerField()
    create_time = models.CharField(max_length=30)
    update_time = models.IntegerField()
    seen_status = models.IntegerField(null=True)
    vod_class_name = models.CharField(max_length=30)


class VideoType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=True)
    sort = models.IntegerField()
    status = models.IntegerField(null=True)
    count = models.IntegerField()
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.IntegerField()


class Withdrawal(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30, null=True)
    name = models.CharField(max_length=30, null=True)
    bankid = models.CharField(max_length=30)
    bankinfo = models.CharField(max_length=30)
    mid = models.IntegerField()
    uid = models.CharField(max_length=30)
    status = models.IntegerField(null=True)
    money = models.CharField(max_length=30)
    desc = models.CharField(max_length=30, null=True)
    create_time = models.CharField(max_length=30)
    update_time = models.IntegerField()


class WithdrawalList(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30, null=True)
    name = models.CharField(max_length=30, null=True)
    bankid = models.CharField(max_length=30, null=True)
    bankinfo = models.CharField(max_length=30, null=True)
    mid = models.IntegerField()
    uid = models.CharField(max_length=30)
    status = models.IntegerField(null=True)
    money = models.CharField(max_length=30)
    desc = models.CharField(max_length=30, null=True)
    create_time = models.CharField(max_length=30)
    update_time = models.IntegerField()

