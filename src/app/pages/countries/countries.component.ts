import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interface/countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

countries:Country[]=[]

  constructor(private getCountries:CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries()
  }

  getAllCountries(){
this.getCountries.get().subscribe(data=>{
  this.countries=data.response.countries;

})
  }



}
