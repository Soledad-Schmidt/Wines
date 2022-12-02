import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WineCartService } from '../wine-cart.service';
import { Wine } from '../wine-list/Wine';

@Component({
  selector: 'app-cart-wines',
  templateUrl: './cart-wines.component.html',
  styleUrls: ['./cart-wines.component.scss']
})
export class CartWinesComponent implements OnInit {

  cartList$ : Observable<Wine[]>;
  constructor(private cart : WineCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
