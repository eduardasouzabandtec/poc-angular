import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

@Component({
  standalone: true,
  imports: [ RouterOutlet, CommonModule, HomeComponent, NavComponent, ShoppingCartComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc';
}
