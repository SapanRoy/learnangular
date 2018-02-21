
import { Component, OnInit } from '@angular/core';
import { CricWorld, Team } from '../shared/cric-world.model';
import { TeamService } from './service/team.service';
import { CountryService } from './../shared/service/country.service';

@Component({
    selector: 'app-team',
    templateUrl: 'team.component.html',
    styleUrls: ['team.component.scss']
})
export class TeamComponent implements OnInit {
    cricWorld: CricWorld;
    teams: Team[];

    constructor(private countryService: CountryService,
        private teamService: TeamService) {
    }
    ngOnInit() {
        this.cricWorld = new CricWorld();
        this.countryService.getCountries().subscribe(
            countriesData => {
                this.cricWorld.countries = countriesData.data;
                this.getTeams();
            },
            err => {
                console.log(err);
            });
    }
    addTeam(teamFromValues) {
        const teamData = {
            Name: teamFromValues.teamName,
            CountryID: teamFromValues.selectedCountry.ID
        };
        this.teamService.addTeam(teamData).subscribe(
            success => {
                this.getTeams();
            },
            err => {
                console.log(err);
            }
        );
    }

    getTeams() {
        this.teamService.getAllTeams().subscribe(
            teamResponseData => {
                this.teams = teamResponseData.json().data;
            },
            err => {
                console.log(err);
            }
        );
    }

    enableEditMode(team: any) {
        team.IsEditing = true;
    }
    updateTeam(teamData: any) {
        this.teamService.updateTeam(teamData).subscribe(
            success => {
                this.getTeams();
            },
            err => {
                console.log(err);
            }
        );
    }
    disableEditMode(team: any) {
        team.IsEditing = false;
    }
    deleteTeam(team: any) {
        this.teamService.deleteTeam(team.ID).subscribe(
            success => {
                this.getTeams();
            },
            err => {
                console.log(err);
            }
        );
    }
}
