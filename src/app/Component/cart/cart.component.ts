import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product: any = [];
  public grandTotal: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  public totalItem: number = 0;
  removeitem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptyCart() {
    this.cartService.removeAllCart();
  }
}
