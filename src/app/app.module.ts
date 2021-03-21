import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MaterialComponentsModule } from './shared/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DishesService } from './services/dishes.service';
import { TodaysSpecialComponent } from './components/todays-special/todays-special.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';

@NgModule({
  imports:      [ 
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialComponentsModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HomeComponent, TodaysSpecialComponent, SearchComponent, SearchPageComponent, DishesListComponent ],
  providers: [DishesService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
