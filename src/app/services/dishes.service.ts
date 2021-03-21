import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IDish } from './models';

@Injectable({ providedIn: 'root' })
export class DishesService {
  //dishes$: BehaviorSubject<IDish[]> = new BehaviorSubject(null);
  //dishesObs: Observable<IDish[]>;

  constructor(private http: HttpClient) {}

  getDishes(): Observable<IDish[]> {
    return this.http.get<IDish[]>('bendita-ka/dist//assets/pratos.json');
  }

  getTodaysSpecial(): Observable<IDish[]> {
    return this.getDishes().pipe(
      switchMap((dishes: IDish[]) => {
        let filteredDishes;
        return this.http
          .get<number[]>('bendita-ka/dist//assets/pratos-do-dia.json')
          .pipe(
            map((ids: number[]) => {
              return dishes.filter((dish) => ids.includes(dish.id as number));
            })
          );
      })
    );
  }

  find(term: string): Observable<IDish[]> {
    return this.getDishes().pipe(
      map((dishes) => {
        console.log('--->', term, '  <----sdfsdf\n\n\n', dishes);
        const filteredDishes: IDish[] = [];
        const dishesByName = dishes.filter((dish) => {
          return dish.nome.toLocaleLowerCase().indexOf(term as string) > -1;
        });
        filteredDishes.concat(dishesByName);

        const dishesByDescr = dishes.filter((dish) => {
          return dish.nome.toLocaleLowerCase().indexOf(term as string) > -1;
        });
        filteredDishes.concat(dishesByDescr);

        const dishesByTipoPrato = dishes.filter((dish) => {
          return (
            (dish.tipoPrato || '').toLocaleLowerCase().indexOf(term as string) >
            -1
          );
        });
        filteredDishes.concat(dishesByDescr);

        const dishesBySecao = dishes.filter((dish) => {
          return (
            (dish.secao || '').toLocaleLowerCase().indexOf(term as string) > -1
          );
        });
        filteredDishes.concat(dishesByDescr);

        console.log('\n\n\n', filteredDishes);
        return filteredDishes;
      })
    );
  }
}
