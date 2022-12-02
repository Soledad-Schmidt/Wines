import { Component, OnInit } from '@angular/core';
import { WineCartService } from '../wine-cart.service';
import { WineDataService } from '../wine-data.service';
import { Wine } from './Wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {

  wines : Wine [] = [];


  constructor(
    private cart : WineCartService,
    private winesDataService: WineDataService) {
   }

  ngOnInit(): void {
    this.winesDataService.getAll()
    .subscribe(wines => this.wines = wines)
  }

  addToCart(wine: Wine) : void {
    this.cart.addToCart(wine);
    wine.stock -= wine.quantity;
    wine.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }

}
