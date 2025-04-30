from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

@api_view(['GET'])
def get_active_section(request):
    active_sections = "Home"
    return JsonResponse({"active_sections": active_sections})


@api_view(['GET'])
def get_about_content(request):
    about_data = {
        "profileText": "Lorem Ipsum...",
    }
    return Response(about_data)

@api_view(['GET'])
def get_about_contenu(request):
    about_data = {
        "id" : 1,
        "description": "I am a software engineer with a passion for solving complex problems..."
    }
    return Response(about_data)