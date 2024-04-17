import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    VacancyListComponent,
    HomePageComponent,
    CompanyDetailsComponent,
    VacancyDetailsComponent,
    AddVacancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }