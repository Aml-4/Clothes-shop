import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProudct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtocart(product : any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    console.log(this.productList);
  }
  getTotalPrice():number {
    let grandtotal = 0;
    this.cartItemList.map((a: any) => {
      grandtotal += a.total;
    })
    return grandtotal;
  }
  removeCartItem(product:any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
