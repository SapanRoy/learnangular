import { HttpModule } from '@angular/http';
import { TeamServiceNew } from './team.service';
import { TestBed, inject } from '@angular/core/testing';
import { baseURL } from '../../shared/environment.config';


describe('TeamService', () => {

    let teamService: TeamServiceNew;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [TeamServiceNew]
        });
        // get refrence of service
        teamService = TestBed.get(TeamServiceNew);
    });

    xit('should retrive teams from the API via GET', () => {

        const dummyTeams = [
            { CountryName: 'Australia', CountryID: 2, ID: 15, Name: 'aussie' },
            { CountryName: 'Bangladesh', CountryID: 5, ID: 12, Name: 'Bongo45' },
            { CountryName: 'Bangladesh', CountryID: 5, ID: 3, Name: 'Australian Team' },
            { CountryName: 'India', CountryID: 1, ID: 2, Name: 'Indian Blue' },
            { CountryName: 'Srilanka', CountryID: 7, ID: 11, Name: 'SLTeam' },
            { CountryName: 'West Indies', CountryID: 8, ID: 5, Name: 'West Indies Team' }
        ];

        teamService.getAllTeams().subscribe(teams => {
            expect(teams.json().data.length).toEqual(7);
        });
    });
});
