import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';
import {HousingService} from 'src/app/services/housing.service'


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;

  constructor(private route:ActivatedRoute,private  housingService:HousingService) { }

  ngOnInit() {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2; //Means we are on rent-property URL else we are on base URL
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(data=>{

      this.properties=data;
      const newProperty = JSON.parse(localStorage.getItem('newProp'));
      if(newProperty.SellRent == this.SellRent){
        this.properties = [newProperty, ...this.properties];
      }
      console.log(data)
    }, error =>{
      console.log(error)
    }
    )

    /*this.http.get('data/properties.json').subscribe(
      data=>{
        this.properties=data;
        console.log(data)
      });*/

  }

}
