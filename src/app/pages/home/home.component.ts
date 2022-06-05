import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { HolidayTodayService } from 'src/app/services/holiday-today.service';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries:any;
  holiday:[]=[];
  form=FormGroup;
  select_country=FormControl
  data_today=FormControl


  constructor(private Countryservice:CountriesService,private yearService:YearService,private holidayToday:HolidayTodayService) { }

  ngOnInit(): void {
    this.Countryservice.get().subscribe((country)=>{this.countries=country})
    this.holidayToday.get().subscribe((holiday)=>{this.holiday=holiday.response.holidays})
console.log(this.countries)
console.log(this.holiday)
  }

}
