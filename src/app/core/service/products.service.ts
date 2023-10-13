import { Injectable, effect, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop'


export interface IShop {
  id: number,
  category: string,
  name: string,
  price: number,
  image: string,
  amount: any
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  shoppingCart = signal<IShop[]>(
    [
      {
        id: 1,
        category: 'Frutinha',
        name: 'moranguinho',
        price: 9.99,
        image: 'morango.jpg',
        amount: 0
      },
      {
        id: 2,
        category: 'Carninha',
        name: 'patinho',
        price: 25.00,
        image: 'patinho.jpeg',
        amount: 0
      },
      {
        id: 2,
        category: 'Leguminho',
        name: 'batatinha',
        price: 5.10,
        image: 'batata.webp',
        amount: 0
      },
      {
        id: 2,
        category: 'Laticinios',
        name: 'Chambiinhuuu',
        price: 5.10,
        image: 'danoninho.png',
        amount: 0
      },
    ]
  );

  valueNOTsignal = 1;
 
  

  get emptyShoppingCart() {
    const refresh = this.shoppingCart().filter(item => item.amount !== 0);
    return refresh.length;
  }

  clearShoopingCart(){
    this.shoppingCart().forEach(product => product.amount = 0)
  }
}
