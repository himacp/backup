import { MatCardModule } from '@angular/material/card';
import { MuzixserviceService } from './muzixservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { from } from 'rxjs';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { WishcardComponent } from './wishcard/wishcard.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatInputModule, MatRippleModule} from '@angular/material'
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchComponent,
    CardcomponentComponent,
    WishlistComponent,
    WishcardComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    //FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    
    MatInputModule,
    MatRippleModule,
    RouterModule
  ],
    
  providers: [MuzixserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
