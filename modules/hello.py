import json


def execute(request):
    print(request.data)
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}
