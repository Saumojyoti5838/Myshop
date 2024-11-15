from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from StudentApp.serializers import CustomerSerializer, ContactMessageSerializer
from StudentApp.models import Customer, ContactMessage
from StudentApp import views

@csrf_exempt
def customerApi(request, id=0):
    if request.method == 'GET':
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        customer_data = JSONParser().parse(request)
        serializer = CustomerSerializer(data=customer_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'PUT':
        customer_data = JSONParser().parse(request)
        customer = Customer.objects.get(id=id)
        serializer = CustomerSerializer(customer, data=customer_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        customer = Customer.objects.get(id=id)
        customer.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@api_view(['POST'])
def contact_message_create(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)
