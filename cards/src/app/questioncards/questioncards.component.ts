import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-questioncards',
  templateUrl: './questioncards.component.html',
  styleUrls: ['./questioncards.component.css']
})
export class QuestioncardsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  @Input()
  trending;

  final1=[];
  final2=[];

  constructor() {
      this.makelist(this.trending);
   }

  makelist(trendings) {
    for(var i=0;i<(trendings.length)-2;i+2){
      this.final1.push(trendings[i]);
      this.final2.push(trendings[i+1]);
    }
  }

}
