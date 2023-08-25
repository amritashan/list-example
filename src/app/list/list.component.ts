import { Component, Input } from '@angular/core';
import { ListItem } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  listItems: ListItem[] | null = [];
}
