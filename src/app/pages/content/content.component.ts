import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from './../../data/data_mock';
import { newsDataObject } from 'src/app/data/data_mock.d';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  id: string | null = null 

  article: newsDataObject | null = null

  constructor(
    private route: ActivatedRoute,
  ) { }


  getNewsById(id: string): newsDataObject | null {

    let requiredNews: newsDataObject[] | null  = data.filter((i:newsDataObject) => i.id == id )
    return requiredNews[0]

  } 

  getIdFromRoute(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id"))
      console.log(this.id)
  }

  ngOnInit(): void {
    this.getIdFromRoute()

    if(this.id) {
      this.article = this.getNewsById(this.id)
    }

  }

}
