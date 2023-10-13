import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { IShop, ProductsService } from 'src/app/core/service/products.service';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' },],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  shopping : IShop[] =[];
  value = 0;
  constructor(
    public productsService: ProductsService
  ){
    this.shopping = productsService.shoppingCart()
    this.value = productsService.valueNOTsignal;
  }

  addAmountShoppings(shop: IShop, t:number) {
    shop.amount++;
    t++;
    this.value++;
  }
}
