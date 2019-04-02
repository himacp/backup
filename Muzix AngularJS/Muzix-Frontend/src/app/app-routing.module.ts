
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import{CardcomponentComponent}from './cardcomponent/cardcomponent.component'

const routes: Routes = [
  
 {path : 'search', component : SearchComponent},
  {path : 'wishlist', component:  WishlistComponent },
  {path : 'card' , component : CardcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
