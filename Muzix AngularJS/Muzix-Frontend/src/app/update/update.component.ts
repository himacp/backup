import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input()
  TrackId

  result : string
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  updateComment(comment){
    this.result = "http://localhost:8090/api/v1/track"+this.TrackId;
    this.http.put(this.result,{
      "comment" : comment
    })
    .subscribe(data  => {
      console.log("PUT Request is successful ", data);
    },
    error  => {
    console.log("Error", error);
  });
}

}
