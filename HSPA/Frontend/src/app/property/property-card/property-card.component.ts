import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Property:any = {
    "id":1,
    "Name":"Valle House",
    "Type":"House",
    "Price":120000
  }


  constructor() { }

  ngOnInit() {
  }

}