import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';




interface IShop {
  category: string,
  name: string,
  price: number,
  image: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  shoppings: IShop[] = [
    {
      category: 'frutinha',
      name: 'moranguinho',
      price: 10.20,
      image: 'morango.jpg'
    },
    {
      category: 'carninha',
      name: 'patinho',
      price: 10.20,
      image: 'patinho.jpeg'
    },
  ]

}
