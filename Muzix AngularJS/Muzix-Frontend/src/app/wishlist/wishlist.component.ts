import { MuzixserviceService } from './../muzixservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  
allTracks 
constructor(private muzixService : MuzixserviceService) { }

ngOnInit() {
}

getAll(){
  this.muzixService.getWishlistMuzix().subscribe((data) =>{
    this.allTracks = data;
    console.log(this.allTracks);
  })
}


}

