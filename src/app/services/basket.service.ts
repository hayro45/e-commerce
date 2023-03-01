import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  api:string="http://localhost:3000/"
  baskets : BasketModel[] = []
  constructor(private http: HttpClient) {this.getBaskets() }

  delete(id:number){
    this.http.delete<any>(this.api+"baskets/"+id).subscribe({
      next:()=>this.getBaskets(),
      error: (err)=>console.log(err)
    })
  }
  getBaskets(){
    this.http.get<any>(this.api+"baskets").subscribe({
      next:(res)=>{this.baskets = res},
      error:(err)=>console.log(err)
    })
  }

}
