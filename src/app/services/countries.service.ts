import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  private apiUrl='https://restcountries.com/v2/all'

  constructor(private http:HttpClient) { }

  get(): Observable<any> {

    return this.http.get<any>(this.apiUrl)
  }
}
