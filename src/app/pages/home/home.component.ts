import { Component, OnInit } from '@angular/core';


interface newsDataObject {
  coverPhoto: string
  title: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList: newsDataObject[] =  [
    {
      coverPhoto: 'https://picsum.photos/id/575/500/300',
      title: 'Angular lança novas features.'
    },
    {
      coverPhoto: 'https://picsum.photos/id/124/500/300',
      title: 'Conheça o PC mais caro do mundo.'
    },  
    {
      coverPhoto: 'https://picsum.photos/id/254/500/300',
      title: "Nova invenção promete superar IA's "
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
