from .models import Company, Vacancy
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404


def companies_list(request):
    companies = Company.objects.all()
    data = {'companies': list(companies.values())}
    return JsonResponse(data)

def company_id(request, company_id):
    company = get_object_or_404(Company, id=company_id)
    data = {'company': {
        'id': company.id,
        'name': company.name,
        'description': company.description,
        'city': company.city,
        'address': company.address,
         "vacancies_in_company": list(company.product_set.values('id','name')),
    }}
    return JsonResponse(data)

def vacancy_list(request):
     vacancy = Vacancy.objects.all()
     data = {'vacancies': list(vacancy.values())}
     return JsonResponse(data)

def vacancy_id(request):
    vacancy = get_object_or_404(Vacancy, id=vacancy_id)
    data = {
        'vacancies': {
            "id": vacancy.id,
            "name": vacancy.name,
            "description": vacancy.description,
            "salary": vacancy.salary,
        }
    }
    return JsonResponse(data)

def sort_vacancy(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)

def company_vacancy(request, id):
        company = Company.objects.get(id=id)
        vacancy = Vacancy.objects.filter(Companyvacancy__company=company)
        data = [
            {
                "id": vc.id,
                "name": vc.name,
                "description": vc.description,
                "salary": vc.salary,
            }
            for vc in vacancy
        ]
        return JsonResponse(data, safe=False)