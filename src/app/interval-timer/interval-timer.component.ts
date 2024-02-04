import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //const counter = interval(1000); // Cada segundo se ejecuta sin parar
    const stopwatch = timer(1000); // solo se inicia una vez al cabo de 1 segundo

    // counter.subscribe((res)=>{
    //   console.log('Interval Timer : ', res);
      
    // });

    stopwatch.subscribe((res)=>{
      console.log('Trigered');
      
    });

  }

}
