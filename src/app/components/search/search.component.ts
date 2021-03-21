import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DishesService } from '../../services/dishes.service';
import { IDish } from '../../services/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchCtrl = new FormControl();

  @Output() onSearch = new EventEmitter<string>();

  todaysSpecialItems$: Observable<IDish[]> = of([]);
  todaysSpecialItems = [];
  error: any;

  options: IDish[] = [];

  filteredOptions: Observable<IDish[]> = of([]);

  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    this.searchCtrl.valueChanges.subscribe((val) => {
      this.onSearch.emit(val);
    });

    // this.filteredOptions = this.searchCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );

    // this.todaysSpecialItems$ = this.dishesService.getTodaysSpecial();
  }

  displayFn(dish: IDish): string {
    return dish && dish.nome ? dish.nome : '';
  }

  private _filter(name: string): IDish[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      (option) => option.nome.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
