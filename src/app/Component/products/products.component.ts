import { CartService } from './../../Services/cart.service';
import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  public productList: any;
  constructor(private api: ApiService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
  addToCart(item: any) {
    alert("The Product is added to your Cart")
    this.cartservice.addtocart(item);
  }

}
