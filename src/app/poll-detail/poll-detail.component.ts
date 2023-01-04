import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentPollService } from '../services/current-poll.service';
import { Poll, Vote } from '../types';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css'],
})
export class PollDetailComponent implements OnInit {
  voteForm: FormGroup;
  poll?: Poll ;
  @Output() voted : EventEmitter<Vote>=new EventEmitter();
  
  constructor(private fb: FormBuilder, private currPoll: CurrentPollService) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }
  
  ngOnInit(): void {
    this.currPoll.currentCourseSelected.subscribe((poll:Poll)=>{
      this.poll = poll;
    })

  }

  submitVote() {
    // console.log(this.voteForm.value);
    const vote:Vote ={ 
      id:this.poll?.id,
      votes:[
        this.voteForm.get("selected")?.value
      ]
    };
    this.voted.emit(vote);
  }
}
