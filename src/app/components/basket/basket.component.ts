import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styles: [
  ]
})
export class BasketComponent implements AfterContentChecked{
  baskets: BasketModel[]=[]
  constructor(private basket: BasketService) {
    
  }  
  ngAfterContentChecked(): void {
    this.baskets = this.basket.baskets
  }
  
  delete(id:number){
    this.basket.delete(id)
  }
}
