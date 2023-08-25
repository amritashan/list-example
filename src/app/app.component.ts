import { Component } from '@angular/core';
import { ListService } from './services/list.service';
import { Observable } from 'rxjs';
import { ListItem } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private listService: ListService) {}

  listItems$ = this.listService.list$ as Observable<ListItem[]>;
}
