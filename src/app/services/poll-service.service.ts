import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Poll, PollForm, Vote } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollServiceService {

  constructor() { }

  getPolls():Observable<Poll[]>{
   return of([
    {
      id:1,
      question:"what is 2+2 ?",
      votes:[21,3,4,6],
      options :[4,44,22,5],
      thumbnailUrl:"https://happ.eu/wp-content/uploads/2022/08/happ-atf.png",
      voted:true
    },
    {
      id:2,
      question:"which is capital of india ?",
      votes :[30,21,32,15],
      options:['mumbai','kolkata','delhi','chennai'],
      thumbnailUrl:"data:image/jpeg;base64,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",
      voted:true
    
    },
    {
      id:3,
      question:"how many days can not be there in a month ?",
      votes:[21,32,4,51],
      options :[32,28,30,31],
      thumbnailUrl:"https://happ.eu/wp-content/uploads/2022/08/happ-atf.png",
      voted:false
    }
    
  ]).pipe(delay(1000));
  }

  addVote(vote:Vote){
    console.log(vote);
  }

  createPoll(poll:PollForm){
    console.log(poll);
  }
}