import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { PollForm } from '../types';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent {
  @Output() pollCreated: EventEmitter<PollForm>=new EventEmitter();
  pollForm : FormGroup;
  
  constructor(private fb: FormBuilder){
    this.pollForm = this.fb.group({
      question: this.fb.control('',[Validators.required]),
      thumbnailUrl : this.fb.control(''),
      option1 : this.fb.control(''),
      option2 : this.fb.control(''),
      option3 : this.fb.control(''),
      option4 : this.fb.control('')
    });
  }
  submitForm(){
    const form ={
      question:this.pollForm.get("question")?.value,
      thumbnailUrl: this.pollForm.get("thumbnailUrl")?.value,
      options:[
        this.pollForm.get("option1"),
        this.pollForm.get("option2"),
        this.pollForm.get("option3"),
        this.pollForm.get("option4")
      ]
    };
    this.pollCreated.emit(form);
    // console.log(this.pollForm.value);
    
  }
}
