import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DishesService } from '../../services/dishes.service';
import { IDish } from '../../services/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  filters = [
    { title: 'Pratos', link: '/search?section=pratos' },
    { title: 'Sobremesas', link: '/search?section=sobremesas' },
    { title: 'Saladas', link: '/search?section=saladas' },
    { title: 'Cardápio vegano/vegetariano', link: '/search?section=veg' },
  ];
  constructor(private dishesService: DishesService) {}

  todaysSpecialItems$: Observable<IDish[]> = of([]);
  error: any;

  ngOnInit() {
    this.todaysSpecialItems$ = this.dishesService.getDishes();
  }
  onSearch($event: string) {}
}
