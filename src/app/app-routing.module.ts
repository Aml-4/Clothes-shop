import { CartComponent } from './Component/cart/cart.component';
import { ProductsComponent } from './Component/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: '', redirectTo:'Products', pathMatch:'full'},
{path:'Products', component: ProductsComponent},
{ path :'Cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
