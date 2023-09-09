import { Component, Input } from '@angular/core';
import { Statuses, TextStyle, supportedStyles } from 'src/app/types';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Input()
  value: string | null | undefined = null;

  @Input()
  textStyle: Statuses | null | undefined = null;

  styles: TextStyle | null = null;

  ngOnInit() {
    if (this.textStyle) {
      this.styles = supportedStyles[this.textStyle];
    }
  }
}
