import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'shopping-cart',
        loadComponent: () => import('./pages/shopping-cart/shopping-cart.component').then(c => c.ShoppingCartComponent)
    }
] 