import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styles: [
  ]
})
export class LayoutsComponent implements AfterContentChecked {
  baskets:BasketModel[]=[]
  api:string="http://localhost:3000/"
  constructor( private basket:BasketService){

  }
  ngAfterContentChecked(): void {
    this.getBaskets()
  }
  
 
  
  getBaskets(){
    this.baskets = this.basket.baskets
  }
}
