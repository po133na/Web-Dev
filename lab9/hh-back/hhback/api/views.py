from .models import Company, Vacancy, CompXVac
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404

def companies_list(request):
    companies = Company.objects.all()
    json = [
        {
            "id": c.id,
            "name": c.name,
            "description": c.description,
            "city": c.city,
            "address": c.address,
        }
        for c in companies
    ]
    return JsonResponse(json, safe=False)

def company_details(request, id):
    try:
        company = Company.objects.get(id=id)
        json = {
            "id": company.id,
            "name": company.name,
            "description": company.description,
            "city": company.city,
            "address": company.address,
        }
        return JsonResponse(json)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
        json = [
            {
                "id": v.id,
                "name": v.name,
                "description": v.description,
                "salary": v.salary,
                "company": v.company.id,
            }
            for v in vacancies
        ]
        return JsonResponse(json, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    json = [
        {
            "id": v.id,
            "name": v.name,
            "description": v.description,
            "salary": v.salary,
            "company": v.company.id,
        }
        for v in vacancies
    ]
    return JsonResponse(json, safe=False)

def vacancy_details(request, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    data = {'vacancy': {
        'name': vacancy.name,
        'description': vacancy.description,
        'salary': vacancy.salary,
        'company': vacancy.company.name,
    }}
    return JsonResponse(data)

def sort_vacancy(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)
