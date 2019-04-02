import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent implements OnInit {
@Input() 
TrackName:string
@Input() 
TrackArtist:string
@Input()
 TrackImage:string
@Input() 
TrackId :number
comments:string=""
  constructor( private http :HttpClient) { }

  ngOnInit() {
  }
  
  addToWishlist(){
    this.http.post("http://localhost:8090/api/v1/track",
    {
      "trackId": this.TrackId,
      "trackName":this.TrackName,
      "trackArtist":this.TrackArtist,
      "imageUrl": this.TrackImage,
      "trackComments" : "sung by:" +this.TrackArtist
   
    },
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'my-auth-token'
    })
   })
   .subscribe(data =>{
    console.log("POST Request is successful",data);
   },
   error =>{
    console.log("Error",error);
   });
   }
   
   }

  

