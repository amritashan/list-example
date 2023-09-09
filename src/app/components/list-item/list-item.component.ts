import { Component, Input } from '@angular/core';
import { ListItem } from 'src/app/types';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input()
  listItemData: ListItem | null = null;
}
