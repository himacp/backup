import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  toptrending=[{"ques":'someques',
                "answer":'someans'},
                {"ques":'someq12ues',
                "answer":'somea12ns'},
                {"ques":'someq34ues',
                "answer":'some34ans'},
                {"ques":'someq56ues',
                "answer":'some56ans'},
                {"ques":'someq78ues',
                "answer":'some78ans'}]
}
