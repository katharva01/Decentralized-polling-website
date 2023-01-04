import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { PollComponent } from './poll/poll.component';
import { ResultComponent } from './result/result.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { CurrentPollService } from './services/current-poll.service';
import { PollServiceService } from './services/poll-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    PollListComponent,
    PollComponent,
    ResultComponent,
    PollCreateComponent,
    PollDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CurrentPollService,PollServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
