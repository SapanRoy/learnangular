
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SampleComponent } from '../sample/sample.component';
import { CommunicationRootComponent } from '../componentCommunication/communication-root.component';

import { TeamComponent } from './../team/team.component';
import { PlayersComponent } from '../players/players.component';
import { SecureComponent } from '../security/secure/secure.component';
import { UnsecureComponent } from './../security/unsecure/unsecure.component';


const routes: Routes =
    [
        {
            path: 'sample',
            component: SampleComponent
        },
        {
            path: 'secure/:name',
            component: SecureComponent
        },
        {
            path: 'unsecure/:name',
            component: UnsecureComponent
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
