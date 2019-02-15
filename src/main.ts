import { ɵrenderComponent as renderComponent } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './new-app/hello-world/hello-world.component';

renderComponent(AppComponent);

renderComponent(HelloWorldComponent);

