import { Component, Input, OnInit } from '@angular/core';
import { CurrentPollService } from '../services/current-poll.service';
import { Poll } from '../types';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit{
  [x: string]: any;
  @Input() id : number |undefined;
  @Input() question : string | undefined;
  @Input() thumbnailUrl : string | undefined;
  @Input() votes : []|undefined;
  @Input() voted:boolean|undefined;
  @Input() poll:Poll|undefined;
  totalVotes:any;

  constructor(public currPoll:CurrentPollService){
    
  }

  ngOnInit(): void {
      if(this.votes){
        this.totalVotes=this.votes.reduce((acc,curr)=>{
          return (acc + curr);
        },0);
      }
      // console.log(this.totalVotes)
  }

  selectPoll(){
    if(this.poll)
    {this.currPoll.setCurrentPoll(this.poll);
    this.currPoll.currentCourseSelected.emit(this.currPoll.currentPoll);
    // alert(this.poll?.question);
    // console.log(this.currPoll.getCurrentPoll()?.question)
  }
}
  



}
