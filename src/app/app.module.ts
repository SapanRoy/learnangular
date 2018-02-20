

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { SharedModule } from '../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SampleComponent } from '../sample/sample.component';
import { CommunicationRootComponent } from '../componentCommunication/communication-root.component';
import { TeamComponent } from './../team/team.component';
import { SiblingComponent } from '../componentCommunication/sibling/sibling.component';
import { ParentComponent } from '../componentCommunication/parent/parent.component';
import { ChildComponent } from './../componentCommunication/parent/child/child.component';
import { PlayersComponent } from '../players/players.component';
// Services
import { TeamService } from './../team/service/team.service';
import { TeamServiceNew } from '../sample/services/team.service';
import { PlayerService } from './../players/service/player.service';


@NgModule({
  declarations: [
    AppComponent,
    CommunicationRootComponent,
    SampleComponent,
    TeamComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [TeamService, TeamServiceNew, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
