import { Component, OnInit } from '@angular/core';
import { HolidayTodayService } from 'src/app/services/holiday-today.service';

@Component({
  selector: 'app-holiday-today',
  templateUrl: './holiday-today.component.html',
  styleUrls: ['./holiday-today.component.css']
})
export class HolidayTodayComponent implements OnInit {
  holidays: any;

  constructor(private holiday:HolidayTodayService) { }

  ngOnInit(): void {
    this.getAllCountries()
  }

  getAllCountries(){
    this.holiday.get().subscribe(data=>{

    this.holidays=data.response.holidays;

    })}

}
