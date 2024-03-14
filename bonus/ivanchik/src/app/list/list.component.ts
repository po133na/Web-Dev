import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [...products];
  
  productsCategory: Product[] | undefined;
  constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    const categoryIdFromRoute = Number(routeParams.get("categoryId"));
    this.productsCategory = this.products.filter(p => p.category === categoryIdFromRoute);
  }
}