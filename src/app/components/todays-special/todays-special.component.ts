import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DishesService } from '../../services/dishes.service';
import { IDish } from '../../services/models';

@Component({
  selector: 'todays-special',
  templateUrl: 'todays-special.component.html',
  styleUrls: ['todays-special.component.scss'],
})
export class TodaysSpecialComponent implements OnInit {
  constructor(private dishesService: DishesService) {}

  todaysSpecialItems$: Observable<IDish[]> = of([]);
  todaysSpecialItems = [];
  error: any;

  ngOnInit() {
    this.todaysSpecialItems$ = this.dishesService.getTodaysSpecial();
  }
}
