import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ContainerComponent } from './container/container.component';
import { BasketPageComponent } from './basket-page/basket-page.component';

const routes: Routes = [
  { path: 'catalog', component: ContainerComponent },
  { path: 'catalog/:id', component: ProductPageComponent },
  { path: 'basket', component: BasketPageComponent },
  { path: '', redirectTo:'/catalog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
