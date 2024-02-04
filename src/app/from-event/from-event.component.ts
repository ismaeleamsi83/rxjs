import { Component, ElementRef, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { fromEvent } from 'rxjs'; 

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit  {


  @ViewChild('fondo') fondo !: ElementRef;

  mouseMove: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void{
    
    if(this.fondo){
      this.mouseMove = fromEvent(this.fondo.nativeElement, 'mousemove');

      this.mouseMove.subscribe((e: MouseEvent)=>{
        console.log(`Coords:  X ${e.clientX} Y ${e.clientY}` );
      });
    }
    
  }
    
  // capturarMouse(){
  //   if(this.fondo){
  //     this.mouseMove = fromEvent(this.fondo.nativeElement, 'mousemove');

  //     this.mouseMove.subscribe((e: MouseEvent)=>{
  //       console.log("Coords:  ", e.clientX);
  //     });
  //   }
  // }
    

}
