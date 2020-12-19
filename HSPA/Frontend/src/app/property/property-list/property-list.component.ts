import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Valle House",
      "Type":"House",
      "Price":250000
    },
    {
      "Id":2,
      "Name":"Isla Verde",
      "Type":"Apartment",
      "Price":400000
    },
    {
      "Id":3,
      "Name":"100 Elmwood Ave",
      "Type":"House",
      "Price":150000
    },
    {
      "Id":4,
      "Name":"Barton Street",
      "Type":"House",
      "Price":125000
    },
    {
      "Id":5,
      "Name":"Wilder 404",
      "Type":"Apartment",
      "Price":100000
    },
    {
      "Id":6,
      "Name":"Coco's Place",
      "Type":"House",
      "Price":175000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
