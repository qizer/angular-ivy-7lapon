import { Component, VERSION } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items: Item[] = [{
    'field1': '11',
    'field2': '22',
    'field3': '11'
  }]

  onAddItem() {
    this.items.push({
      'field1': 'val1',
      'field2': 'val2',
      'field3': 'val3'
    })
  }
}
