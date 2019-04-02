import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MuzixserviceService {
  getMuzix(muzix: string): any {
    throw new Error("Method not implemented.");
  }
 private _url;
 constructor(private http:HttpClient){}

 getData(val:string){
  this._url="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+val+"&api_key=e9509590abfc36a0c3889583f609dacd&format=json";
 return this.http.get(this._url);
}

getWishlistMuzix(){
  return this.http.get("http://localhost:8090/api/v1/track")
}
}
