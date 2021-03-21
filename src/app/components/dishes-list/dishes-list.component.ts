import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDish } from '../../services/models';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss'],
})
export class DishesListComponent {
  greeting = 'Olá, desejo encomendar o prato ';
  @Input() dishes$: Observable<IDish[]> = of([]);

  itemWhatsUp(item: IDish): string {
    let message = `
      ${this.greeting} \n${item.nome} (${item.id})
      `;
    return (
      'https://api.whatsapp.com/send?phone=+5511961669777&text=' +
      encodeURI(message)
    );
  }
}
