import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { HolidayTodayService } from 'src/app/services/holiday-today.service';
import { YearService } from 'src/app/services/year.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Highlight the first autocomplete option
 */

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
  
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;


  constructor(private Countryservice:CountriesService,private yearService:YearService,private holidayToday:HolidayTodayService) { }

  ngOnInit(): void {
    this.Countryservice.get().subscribe((country)=>{this.options=country})
    this.holidayToday.get().subscribe((holiday)=>{this.holiday=holiday.response.holidays})
    console.log("here ...")
    console.log(this.options)

this.filteredOptions = this.myControl.valueChanges.pipe(
  startWith(''),
  map(value => this._filter(value || '')),
);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
