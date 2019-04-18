import { Component, OnInit } from '@angular/core';
import {products} from './products';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  public productsAvailable:products[] = [];

  p1 = new products('nokia', 10, 'phones');  p2 = new products('samsung', 15, 'phones');
  p3 = new products('lg', 18, 'phones');  p4 = new products('htc', 15, 'phones');
  p5 = new products('iphone', 20, 'phones');  p6 = new products('oppo', 16, 'phones');
  p7 = new products('lava', 14, 'phones');  p8 = new products('karbon', 12, 'phones');
  p9 = new products('dal', 20 , 'grocery');  p10 = new products('oil', 25 , 'grocery');
  p11 = new products('flour', 15 , 'grocery');  p12 = new products('cookies', 10 , 'grocery');
  p13 = new products('salt', 15 , 'grocery'); p14 = new products('sugar', 25 , 'grocery');
  p15 = new products('tea', 13 , 'grocery'); p16 = new products('cofee', 17 , 'grocery');
  p17 = new products('eggs', 20 , 'grocery');  p18 = new products('water', 50, 'drinks');
  p19 = new products('coke', 60, 'drinks');  p20 = new products('pepsi', 50, 'drinks');
  p21 = new products('juice', 30, 'drinks');  p22 = new products('beer', 70, 'drinks');
  p23 = new products('wine', 50, 'drinks');  p24 = new products('vodka', 20, 'drinks');
  p25 = new products('soda', 40, 'drinks');  p26 = new products('milk', 60, 'drinks');
  p27 = new products('popcorn', 20, 'snacks');  p28 = new products('chips', 30, 'snacks');
  p29 = new products('jerky', 40, 'snacks');  p30 = new products('icecream', 30, 'snacks');
  p31 = new products('muffins', 35, 'snacks');  p32 = new products('granola', 40, 'snacks');

  //productsAvailable.push({p1});

  constructor() { }

  ngOnInit() {
  }

}
