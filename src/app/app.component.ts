import { Component } from '@angular/core';
import { PollServiceService } from './services/poll-service.service';
import { Poll, Vote } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  polls = this.ps.getPolls();
  constructor(private ps:PollServiceService){
    
  }
  addPoll(poll: any){
    // console.log(poll);
    this.ps.createPoll(poll);
  }

  handleVoted(vote:Vote){
    // console.log(vote)
    this.ps.addVote(vote);
  }
 
}
