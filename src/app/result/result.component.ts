import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { CurrentPollService } from '../services/current-poll.service';
import { Poll } from '../types';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  poll?:Poll;
  constructor(private currPoll:CurrentPollService){

  }
  ngOnInit(): void {
      this.currPoll.currentCourseSelected.subscribe((poll:Poll)=>{
        this.poll=poll;
        if(this.poll){
          this.generateChart();
        }


      })
  }
  generateChart(){
    const options:ApexCharts.ApexOptions={
      series:[
        {
          data: (this.poll?.votes) ? (this.poll.votes):[],
        },
      ],
      chart:{
        height:350,
        type:"bar"
      },
      plotOptions:{
        bar:{
          columnWidth: '45%',
          distributed:true,

        },
      },
      legend:{
        show:false,
      },
      xaxis:{
        categories:(this.poll?.options) ? (this.poll.options):[],
      },
    };
    let canvas:any =document.getElementById("chart-container");
    canvas.innerHTML='&nbsp;';
    const chart= new ApexCharts(document.getElementById("chart-container"),options);
    chart.render();
  }
}
