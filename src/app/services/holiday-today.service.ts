import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayTodayService {

  private apiUrl='https://calendarific.com/api/v2/holidays?&api_key=dc230fd7bbc5203608f674becd9ff567320bf536&country=ke&year=2022'

  constructor(private http:HttpClient) { }

  get(): Observable<any> {

    return this.http.get<any>(this.apiUrl)
  }
}
