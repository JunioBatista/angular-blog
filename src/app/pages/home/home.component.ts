import { Component, OnInit } from '@angular/core';
import {  data } from 'src/app/data/data_mock'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList = data

  constructor() { }

  ngOnInit(): void {
  }

}
