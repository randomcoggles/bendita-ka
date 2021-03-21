import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DishesService } from '../../services/dishes.service';
import { IDish } from '../../services/models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor(private dishesService: DishesService) {}

  filteredItems$: Observable<IDish[]> = of([]);

  ngOnInit() {
    this.filteredItems$ = this.dishesService.getTodaysSpecial();
  }

  onSearch(searchText: string) {
    const termText = (searchText || '').toLocaleLowerCase().trim();
    if (!termText) {
      return;
    }
    // console.log('\n\n', termText);
    // TODO: remove special characters here
    this.filteredItems$ = this.dishesService.find(termText);
  }
}
