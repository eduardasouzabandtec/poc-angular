import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/card/card.component';
import { CardFooterComponent } from 'src/app/shared/card-footer/card-footer.component';
import { ProductsService } from 'src/app/core/service/products.service';








@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, CardFooterComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  constructor(
    public productsService : ProductsService
  ){}
}
