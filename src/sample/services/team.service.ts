import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../../shared/environment.config';

@Injectable()
export class TeamServiceNew {
    constructor(private http: Http) {
    }
    getAllTeams(): Observable<any> {
        return this.http.get(`${baseURL}/team`);
    }
}
