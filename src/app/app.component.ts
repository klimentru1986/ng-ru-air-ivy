import {
  Component,
  ɵrenderComponent as renderComponent,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container') lazyContainer: ElementRef;

  getLazy() {
    import('lazy-lib').then(({ LazyLibComponent }) => {
      console.log(LazyLibComponent.ngComponentDef);
      const selector = LazyLibComponent.ngComponentDef.selectors[0][0];
      this.lazyContainer.nativeElement.innerHTML = `<${selector}></${selector}>`;
      renderComponent(LazyLibComponent);
    });
  }
}
