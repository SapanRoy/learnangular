

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SampleComponent } from '../sample/sample.component';
import { CommunicationRootComponent } from '../componentCommunication/communication-root.component';

import { TeamComponent } from './../team/team.component';
import { PlayersComponent } from '../players/players.component';


const routes: Routes =
    [
        {
            path: 'sample',
            component: SampleComponent
        },
        {
            path: 'componentcommunication',
            component: CommunicationRootComponent
        },
        {
            path: 'team',
            children: [
                {
                    path: 'list',
                    component: TeamComponent
                },
                {
                    path: 'player/:countryID',
                    component: PlayersComponent
                }
            ]
        },
        ];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
