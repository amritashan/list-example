import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListItem } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list$: Observable<ListItem[]> = of(
    [...Array(10).fill({}).map(
      (_, index) => ({ title: `List Item: Title ${index + 1}`, subtitle: `Subtitle ${index + 1}` } as ListItem),
    )]
  );

  getListItems() {
    return this.list$;
  }
}
