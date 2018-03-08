import { HttpModule } from '@angular/http';
import { TeamServiceNew } from './team.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { baseURL } from '../../shared/environment.config';


describe('TeamService', () => {

    let teamService: TeamServiceNew;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, HttpClientTestingModule],
            providers: [TeamServiceNew]
        });
        // get refrence of service
        teamService = TestBed.get(TeamServiceNew);
        httpMock = TestBed.get(HttpTestingController);
    });

    fit('should retrive teams from the API via GET', () => {

        const dummyTeams = [
            { CountryName: 'Australia', CountryID: 2, ID: 15, Name: 'aussie' },
            { CountryName: 'Bangladesh', CountryID: 5, ID: 12, Name: 'Bongo45' },
            { CountryName: 'Bangladesh', CountryID: 5, ID: 3, Name: 'Australian Team' },
            { CountryName: 'India', CountryID: 1, ID: 2, Name: 'Indian Blue' },
            { CountryName: 'Srilanka', CountryID: 7, ID: 11, Name: 'SLTeam' },
            { CountryName: 'West Indies', CountryID: 8, ID: 5, Name: 'West Indies Team' }
        ];

        teamService.getAllTeams();

        // teamService.getAllTeams().subscribe(teams => {
        //     expect(teams.json().data.length).toBe(7);
        // });

        
        const mockRequest = httpMock.expectOne('http://localhost:4000/team', 'Testing team service');
        // verify that there is now one (and only one) request queued up
        // const mockRequest = httpMock.expectOne(`${baseURL}/team`, 'Testing team service');
        expect(mockRequest.request.method).toEqual('GET');
        mockRequest.flush(dummyTeams);

    });

    // Bonus tip: you already have mockHttp in the describe() scope.  Simplify:
    afterEach(() => {
        // verify there are no unsatisfied requests in the mockHttp queue
        httpMock.verify();
    });

});
