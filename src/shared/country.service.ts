

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { baseURL } from './environment.config';


@Injectable()
export class CountryService {
  constructor(private httpClient: HttpClient) {

  }
  getCountries(): Observable<any> {
    return this.httpClient.get(`${baseURL}/country`);
  }

  getCountryById(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/country/${id}`);
  }

}
