import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wishcard',
  templateUrl: './wishcard.component.html',
  styleUrls: ['./wishcard.component.css']
})
export class WishcardComponent implements OnInit {

@Input()
  url 

  delete;
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  deleteMuzix(id){
    this.delete = "http://localhost:8090/api/v1/track/"+id;
    this.http.delete(this.delete).subscribe(data  => {
      console.log("DELETE Request is successful ", data);
    },
    error  => {
    console.log("Error", error);
    });
  }
}
