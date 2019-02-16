import {
  Component, ComponentFactoryResolver
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  getLazy() {
    const module = import('lazy-lib').then(({ LazyLibComponent }) => {
      console.log(LazyLibComponent);

    });
    console.log(module);
  }
}
