#/api/companies - List of all Companies
#/api/companies/<int:id>/ - Get one Company
#/api/companies/<int:id>/vacancies/ - List of Vacancies by Company
#/api/vacancies/ - List of all Vacancies
#/api/vacancies/<int:id>/ - Get one Vacancy
#/api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary


from django.urls import path
from . import views

urlpatterns = [
    path("companies/", views.companies_list),
    path("companies/<int:id>/", views.company_detail),
    path("companies/<int:id>/vacancies/", views.company_vacancies),
    path("vacancies/", views.vacancies_list),
    path("vacancies/<int:id>/", views.vacancy_detail),
    path("vacancies/top_ten/", views.sort_vacancy),
]