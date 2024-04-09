from django.db import models





class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    city = models.CharField(max_length=100)
    address = models.TextField(max_length=100)

    def __str__(self):
        return f"id:{self.id}, name:{self.name}"
    
    class Meta:
        app_label = "api"
        verbose_name = "Company"
        verbose_name_plural = "Companies"

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return f"id:{self.id}, name:{self.name}"
    
    class Meta:
        app_label = "api"
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"

class CompXVac(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    vacancy = models.ForeignKey(Vacancy, on_delete = models.CASCADE)

    def __str__(self):
        return f"company title: {self.company.name}, vacancy title: {self.vacancy.name}"