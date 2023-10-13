import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { IShop, ProductsService } from 'src/app/core/service/products.service';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
registerLocaleData(ptBr);


@Component({
  selector: 'app-card-footer',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatListModule, MatIconModule, MatButtonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' },],
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent {
  total = 0;
  shopping :IShop[];

  constructor(
    public productsService: ProductsService
  ) {
    this.shopping = productsService.shoppingCart();
    this.total = productsService.valueNOTsignal;
  }

  removeAmountShoppings(shop: IShop){
    shop.amount --;
  }
  addAmountShoppings(shop: IShop){
    shop.amount ++;
  }

  get calCtotal() {
    let calc = 0;
    this.shopping.forEach(item => calc += item.price * item.amount)
    return  calc;
  }
}
