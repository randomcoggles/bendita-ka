import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'mock-search-filter'
})
export class MockSearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.president.toLowerCase().includes(searchText) || it.party.toLowerCase().includes(searchText) || it.took_office.toLowerCase().includes(searchText);
    });
   }
}