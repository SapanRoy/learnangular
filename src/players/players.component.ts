

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PlayerService } from './service/player.service';

@Component({
    selector: 'app-players',
    templateUrl: 'players.component.html',
    styleUrls: ['players.component.scss']
})
export class PlayersComponent implements OnInit {

    activatedRouteSubscription: Subscription;
    countryID: number;
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private playerService: PlayerService) { 

        }
    playerForm: FormGroup;
    ngOnInit() {
        this.activatedRouteSubscription = this.activatedRoute.params.subscribe(param => {
            this.countryID = param['countryID'];
        });

        // Create form control
        let nameControl = new FormControl('', Validators.required);
        let ageControl = new FormControl('', Validators.required);
        let countryControl = new FormControl();

        // intial form group
        this.playerForm = new FormGroup({
            name: nameControl,
            age: ageControl,
            country: countryControl
        });
    }

    saveProfile(formValues: any) {
        //this.playerService.addPlayer();
    }
    cancel() {
        this.router.navigate(['team/list']);
    }

    ngDestroy() {
        this.activatedRouteSubscription.unsubscribe();
    }
}
