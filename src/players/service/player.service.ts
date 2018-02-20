import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../shared/environment.config';

@Injectable()
export class PlayerService {
    constructor(private http: Http) {
    }
    addPlayer(player: any) {
        return this.http.post(`${baseURL}/player`, player);
    }
    getAllPlayers(): Observable<any> {
        return this.http.get(`${baseURL}/player`);
    }
    updatePlayer(player: any) {
        return this.http.put(`${baseURL}/player`, player);
    }
    deletePlayer(playerID: any) {
        return this.http.delete(`${baseURL}/player/${playerID}`);
    }
}
