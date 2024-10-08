# Generated by Django 5.1 on 2024-08-28 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Agent',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
                ('status', models.IntegerField(null=True)),
                ('code', models.CharField(max_length=200)),
                ('rid', models.IntegerField(null=True)),
                ('player', models.IntegerField(null=True)),
                ('ip', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=11)),
                ('last_time', models.CharField(max_length=30)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField(null=True)),
                ('role', models.CharField(max_length=30)),
                ('area', models.CharField(max_length=30)),
                ('membercount', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Bank',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('uid', models.IntegerField(null=True)),
                ('bankid', models.CharField(blank=True, max_length=30, null=True)),
                ('bankinfo', models.CharField(blank=True, max_length=30, null=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField(null=True)),
                ('username', models.CharField(max_length=30, null=True)),
                ('name', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30, null=True)),
                ('url', models.CharField(max_length=200, null=True)),
                ('status', models.IntegerField(null=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Girl',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('xuanfei_name', models.CharField(max_length=30)),
                ('img_url', models.CharField(max_length=200, null=True)),
                ('class_id', models.IntegerField(null=True)),
                ('name', models.CharField(max_length=30, null=True)),
                ('vod_pic', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='GirlType',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30, null=True)),
                ('count', models.IntegerField()),
                ('add_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='LotteryEdit',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('key', models.CharField(max_length=30)),
                ('name', models.CharField(max_length=30, null=True)),
                ('expect', models.CharField(max_length=30)),
                ('opencode', models.CharField(max_length=10)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='LotteryHis',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('key', models.CharField(max_length=30)),
                ('name', models.CharField(max_length=30, null=True)),
                ('expect', models.CharField(max_length=30)),
                ('opencode', models.CharField(max_length=10)),
                ('is_yukaijiang', models.IntegerField()),
                ('yukiangjiang', models.CharField(max_length=200)),
                ('cid', models.CharField(max_length=200)),
                ('rule', models.CharField(max_length=200)),
                ('next_opentime', models.DateTimeField(auto_now_add=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='LotteryList',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30, null=True)),
                ('status', models.IntegerField(null=True)),
                ('rule', models.CharField(max_length=10)),
                ('cid', models.CharField(max_length=200)),
                ('condition', models.CharField(max_length=10)),
                ('hot', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='LotteryType',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30, null=True)),
                ('status', models.IntegerField(null=True)),
                ('sort', models.CharField(max_length=10)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField(null=True)),
                ('count', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=100)),
                ('status', models.IntegerField(null=True)),
                ('money', models.DecimalField(decimal_places=2, max_digits=20)),
                ('amount_code', models.DecimalField(decimal_places=2, max_digits=10)),
                ('phone', models.CharField(max_length=30, null=True)),
                ('name', models.CharField(max_length=50)),
                ('sex', models.CharField(max_length=50)),
                ('paypassword', models.CharField(max_length=100)),
                ('header_img', models.CharField(max_length=50)),
                ('uid', models.IntegerField()),
                ('ip', models.CharField(max_length=50)),
                ('last_time', models.DateTimeField(auto_now_add=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField()),
                ('num', models.IntegerField()),
                ('min', models.IntegerField()),
                ('max', models.IntegerField()),
                ('is_online', models.IntegerField()),
                ('role', models.CharField(max_length=30)),
                ('area', models.CharField(max_length=30)),
                ('daili', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Notice',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30, null=True)),
                ('status', models.IntegerField(null=True)),
                ('text', models.TextField()),
                ('hot', models.IntegerField()),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Recharge',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('mid', models.CharField(max_length=30)),
                ('uid', models.CharField(max_length=30)),
                ('type', models.IntegerField(null=True)),
                ('desc', models.CharField(max_length=200)),
                ('money', models.IntegerField(null=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30, null=True)),
                ('role', models.CharField(max_length=255)),
                ('count', models.IntegerField()),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='TicketHis',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('vod_name', models.CharField(max_length=30)),
                ('vod_pic', models.CharField(max_length=255)),
                ('vod_play_url', models.CharField(max_length=255)),
                ('vod_status', models.IntegerField()),
                ('vod_duration', models.CharField(max_length=30)),
                ('vod_score_num', models.IntegerField()),
                ('vod_class_id', models.IntegerField()),
                ('vod_hot', models.IntegerField()),
                ('create_time', models.CharField(max_length=30)),
                ('update_time', models.IntegerField()),
                ('seen_status', models.IntegerField(null=True)),
                ('vod_class_name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='VideoType',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30, null=True)),
                ('sort', models.IntegerField()),
                ('status', models.IntegerField(null=True)),
                ('count', models.IntegerField()),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Withdrawal',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=30, null=True)),
                ('name', models.CharField(max_length=30, null=True)),
                ('bankid', models.CharField(max_length=30)),
                ('bankinfo', models.CharField(max_length=30)),
                ('mid', models.IntegerField()),
                ('uid', models.CharField(max_length=30)),
                ('status', models.IntegerField(null=True)),
                ('money', models.CharField(max_length=30)),
                ('desc', models.CharField(max_length=30, null=True)),
                ('create_time', models.CharField(max_length=30)),
                ('update_time', models.IntegerField()),
            ],
        ),
    ]
