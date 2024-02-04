import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  //P1
  obs: any;

  //P2
  foo: any;

  constructor() { 

    //P1
    this.obs = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    //P2
    this.foo = new Observable((subscriber) => {
      console.log('Hello');
      subscriber.next(42);
    });
  }

  ngOnInit(): void {
    
    //P1
    console.log('just before subscribe');
    this.obs.subscribe({
      next(x: any) {
        console.log('got value ' + x);
      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');

    //P2
    this.foo.subscribe((x:any) => {
      console.log(x);
    });
    this.foo.subscribe((y:any) => {
      console.log(y);
    });

  }

  

}
