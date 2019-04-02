import { MuzixserviceService } from './../muzixservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchdata;
 imageUrl;
 muzix: string;

  constructor(private muzixService:MuzixserviceService) { }

  ngOnInit() {
  
  }
  
  Search(value){
    this.muzix = value;
    this.muzixService.getData(this.muzix).subscribe((data) => {
      this.searchdata =data['results']['trackmatches']['track'];
    });
  }

  getImage(search){
    return search['image'][3]['#text']
  }
}
