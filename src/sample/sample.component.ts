import { Component, OnInit } from '@angular/core';
import { TeamServiceNew } from './services/team.service';

@Component({
    moduleId: module.id,
    selector: 'app-sample',
    templateUrl: 'sample.component.html',
    styleUrls: ['sample.component.scss']
})
export class SampleComponent implements OnInit {

    teams: any;
    today = new Date(2018, 2, 16);
    constructor(private teamServiceNew: TeamServiceNew) {

    }
    ngOnInit() {
        this.teamServiceNew.getAllTeams().subscribe(teamData => {
            this.teams = teamData.json().data;
        });
    }
}
