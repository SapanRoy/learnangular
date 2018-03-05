import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-secure',
    templateUrl: 'secure.component.html',
    styleUrls: ['secure.component.scss']
})
export class SecureComponent implements OnInit {
    activatedRouteSubscription: Subscription;
    name: string;
    stringContent: string;

    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRouteSubscription = this.activatedRoute.params.subscribe(param => {
            this.name = param['name'];
        });
        this.stringContent = 'Template <script>alert("Hello")</script> <b>Syntax</b>';
        // this.name = '<script>alert("0wned")</script>';
    }
}
