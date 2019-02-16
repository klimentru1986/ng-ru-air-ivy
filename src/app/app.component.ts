import { Component, ɵrenderComponent as renderComponent } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  getLazy() {
    import('lazy-lib').then(({ LazyLibComponent }) => {
      renderComponent(LazyLibComponent);
    });
  }
}
