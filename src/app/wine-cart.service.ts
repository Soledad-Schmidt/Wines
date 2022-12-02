import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wine } from './wine-list/Wine';

@Injectable({
  providedIn: 'root'
})
export class WineCartService {

  private _cartList : Wine [] = [];

  cartList : BehaviorSubject<Wine[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(wine : Wine){
    let item = this._cartList.find((v1) => v1.name == wine.name);
    if(!item){
      this._cartList.push({... wine});
    }
    else{
      item.quantity += wine.quantity;
    }
    this.cartList.next(this._cartList);
  }

}
