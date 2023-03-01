import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  api:string="http://localhost:3000/"
  product:ProductModel = new ProductModel()
  products: ProductModel[]=[ ]

  constructor(private http:HttpClient, private basket:BasketService){

  }
  
  ngOnInit(): void {
    this.urunListesiGetir();
  }

  urunListesiGetir(){
    this.http.get<any>(this.api+"products").subscribe({
      next:(res)=>this.products =res,
      error:(err)=>console.log(err)
    })
  }
  
  urunEkle(){
    this.http.post<any>(this.api+"products", this.product).subscribe({
      next:(res)=>{
        this.urunListesiGetir();
        this.product = new ProductModel();
      },
      error:(err)=>console.log(err)
    })
  }

  sepeteEkle(model: ProductModel){
    this.http.post<any>(this.api+"baskets", model).subscribe({
      next:()=>{
        console.log("sepete ürün eklendi");
        this.getBaskets() 
    },
      error:(err)=>console.log(err)
    })
  }

  getBaskets(){
    this.http.get<any>(this.api+"baskets").subscribe({
      next:(res)=>{this.basket.baskets = res},
      error:(err)=>console.log(err)
    })
  }

}
