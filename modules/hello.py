import json


def execute(request):
    print(request.data)
    return "Hello"
