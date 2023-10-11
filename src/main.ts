import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/routes";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideAnimations } from '@angular/platform-browser/animations';

  
bootstrapApplication(AppComponent, {providers: [provideRouter(routes), provideAnimations(), provideAnimations()]});