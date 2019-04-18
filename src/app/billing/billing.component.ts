import { Product } from './product';
import { Component, OnInit, isDevMode  } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  //product =new Product('cakes', 2, 3);
  //public productsArray: Array<Product>;
  public arrayOfProducts : Product[] =[]
  pname = '';
  pnum = 0 ;
  pcost= 0 ;
  sum = 0 ;

  constructor() { }

  ngOnInit() {
    //console.log('product',this.product);
    //this.productsArray.push(this.product);
  }
  adding() {
    this.arrayOfProducts.push({
      name: this.pname,
      num: this.pnum,
      price: this.pcost
    });

    this.sum += (this.pnum * this.pcost) ;
    this.pname = '';
    this.pnum = 0 ;
    this.pcost = 0 ;

  }
}
