import { EventEmitter, Injectable, Output } from '@angular/core';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CurrentPollService {

  
  constructor() { }

  currentPoll:Poll|undefined;
  currentCourseSelected= new EventEmitter<Poll>();
  
  setCurrentPoll(poll:Poll){
    this.currentPoll=poll;
    return;
  }

  getCurrentPoll(): Poll | undefined{
    return this.currentPoll;
  }
}
