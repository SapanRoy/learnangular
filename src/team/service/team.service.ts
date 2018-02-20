import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../shared/environment.config';

@Injectable()
export class TeamService {
    constructor(private http: Http) {
    }
    addTeam(team: any) {
        return this.http.post(`${baseURL}/team`, team);
    }
    getAllTeams(): Observable<any> {
        return this.http.get(`${baseURL}/team`);
    }
    updateTeam(team: any) {
        return this.http.put(`${baseURL}/team`, team);
    }
    deleteTeam(teamID: any) {
        return this.http.delete(`${baseURL}/team/${teamID}`);
    }
}
