from django.urls import path

from . import views

urlpatterns = [
    path("products/", views.product_list),
    path("products/<int:product_id>", views.productId),
    path("categories/", views.category_list),
    path("categories/<int:category_id>", views.categoryId),
    path("categories/<int:id>/products/", views.category_products),
]