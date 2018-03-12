import { TestBed, async, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TeamServiceNew } from './team.service';
import { baseURL } from '../../shared/environment.config';

describe('TeamServiceNew', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                { provide: baseURL, useValue: 'http://localhost:4000' },
                TeamServiceNew,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });
    });

    describe('getTeams()', () => {

        xit('should return an Observable of teams>',
            inject([TeamServiceNew, XHRBackend], (teamServiceNew, mockBackend) => {

                const mockResponse = {
                    data: [
                        { CountryName: 'Australia', CountryID: 2, ID: 15, Name: 'aussie' },
                        { CountryName: 'Bangladesh', CountryID: 5, ID: 12, Name: 'Bongo45' },
                        { CountryName: 'Bangladesh', CountryID: 5, ID: 3, Name: 'Australian Team' },
                        { CountryName: 'India12', CountryID: 1, ID: 2, Name: 'Indian Blue' },
                        { CountryName: 'Srilanka', CountryID: 7, ID: 11, Name: 'SLTeam' },
                        { CountryName: 'West Indies', CountryID: 8, ID: 5, Name: 'West Indies Team' }
                    ]
                };

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                teamServiceNew.getAllTeams().subscribe((teams) => {
                    const fetchedTeams = teams.json().data;
                    expect(fetchedTeams.length).toBe(6);
                    expect(fetchedTeams[0].CountryName).toEqual('Australia12');
                });
            }));
    });
});
