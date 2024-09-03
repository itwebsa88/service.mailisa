from faker import Faker
from adminapp.models import *
import random
from random import randint
from dateutil.parser import parse
from django.http import JsonResponse

faker = Faker()
def test_data(request):
    month = 9
    date = 30
    i = 479
    try:
        for cname in ["Xác thực 1", "Xác thực 2", "Xác thực 3", "Xác thực 4"]:
            timeparse = parse("2024-10-" + "01" + " " + "00" + ":" + "00" + ":00.000000")
            lotteryEdit = LotteryHis(
                name=cname,
                expect=str(202400000000 + month*1000000 + date * 10000 + i + 1),
                opencode=','.join([str(elem) for elem in random.sample([1, 2, 3, 4], 2)]),
                create_time="2024-"+ str(month) +"-" + str(date) + " " + str(i * 3 // 60).zfill(2) + ":" + str(i * 3 % 60).zfill(2) + ":00.000000",
                is_yukaijiang=0,
                yukiangjiang="Tự động mở thưởng",
                rule="3 phút 1 phiên",
                next_opentime=timeparse,
            )
            lotteryEdit.save()
    except Exception as e:
        print(month, date, i)
        print(e)


def test_data2(request):
    for month in range(8, 10):
        for date in range(1, 32):
            for i in range(0, 480):
                    for cname in ["Xác thực 1", "Xác thực 2", "Xác thực 3", "Xác thực 4"]:

                        try:
                            if (i == 479) & (date == 30) & (month in [9, 11, 12]):
                                timeparse = parse("2024-"+ str(month + 1) +"-" + "01" + " " + "00" + ":" + "00" + ":00.000000")
                            elif (i == 479) & (date < 31) & (month in [8, 10, 12]):
                                timeparse = parse("2024-"+ str(month) +"-" + str(date + 1) + " " + "00" + ":" + "00" + ":00.000000")
                            elif (i == 479) & (date == 31) & (month in [8, 10, 12]):
                                timeparse = parse("2024-"+ str(month + 1) +"-" + "01" + " " + "00" + ":" + "00" + ":00.000000")
                            else:
                                timeparse = parse("2024-"+ str(month) +"-" + str(date) + " " + str(i * 3 // 60).zfill(2) + ":" + str((i + 1) * 3 % 60).zfill(2) + ":00.000000")

                            lotteryEdit = LotteryHis(
                                name=cname,
                                expect=str(202400000000 + month*1000000 + date * 10000 + i + 1),
                                opencode=','.join([str(elem) for elem in random.sample([1, 2, 3, 4], 2)]),
                                create_time="2024-"+ str(month) +"-" + str(date) + " " + str(i * 3 // 60).zfill(2) + ":" + str(i * 3 % 60).zfill(2) + ":00.000000",
                                is_yukaijiang=0,
                                yukiangjiang="Tự động mở thưởng",
                                rule="3 phút 1 phiên",
                                next_opentime=timeparse,
                            )
                            lotteryEdit.save()
                        except Exception as e:
                            print(month, date, i)
                            print(e)
    data = {"code": 0, "msg": ""}
    return JsonResponse(data)

def test_data3(request):

    # specify the start date is 2021 jan 1 st
    # specify the end date is 2021 feb 1 st

    # display only date using date() function
    for year in range(2024, 2025):
        for month in range(8, 10):
            for date in range(1, 32):
                for i in range(0, 480):
                    try:
                        for cname in ["Xác thực 1", "Xác thực 2", "Xác thực 3", "Xác thực 4"]:
                            if (i == 479) & (date == 30) & (month in [9, 11, 12]):
                                timeparse = parse("2024-"+ str(month + 1) +"-" + "01" + " " + "00" + ":" + "00" + ":00.000000")
                            elif (i == 479) & (date < 31) & (month in [8, 10, 12]):
                                timeparse = parse("2024-"+ str(month) +"-" + str(date + 1) + " " + "00" + ":" + "00" + ":00.000000")
                            elif (i == 479) & (date == 31) & (month in [8, 10, 12]):
                                timeparse = parse("2024-"+ str(month + 1) +"-" + "01" + " " + "00" + ":" + "00" + ":00.000000")
                            else:
                                timeparse = parse("2024-"+ str(month) +"-" + str(date) + " " + str(i * 3 // 60).zfill(2) + ":" + str((i + 1) * 3 % 60).zfill(2) + ":00.000000")

                            lotteryEdit = LotteryHis(
                                name=cname,
                                expect=str(202400000000 + month*1000000 + date * 10000 + i + 1),
                                opencode=','.join([str(elem) for elem in random.sample([1, 2, 3, 4], 2)]),
                                create_time="2024-"+ str(month) +"-" + str(date) + " " + str(i * 3 // 60).zfill(2) + ":" + str(i * 3 % 60).zfill(2) + ":00.000000",
                                is_yukaijiang=0,
                                yukiangjiang="Tự động mở thưởng",
                                rule="3 phút 1 phiên",
                                next_opentime=timeparse,
                            )
                            lotteryEdit.save()
                    except Exception as e:
                        print(month, date, i)
                        print(e)
