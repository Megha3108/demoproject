import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component,OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';
declare let toastr
@Component({
    selector: 'event-list',
    template:`<div>
    <h2>Welcome to Angular Course</h2>
    <div class="well hoverwell thumbnail">
    <div>Hello world</div>
    </div>
    <div class="row">
    <div  *ngFor="let event of events" class="col-md-5">
    <event-thumbnail    
    [event]="event" (click)="handleThumbnail(event.name)"></event-thumbnail>
    </div>
    </div>
    </div>
    
`,
 styles:[
     `
     
     .well div {color:yellow;}
     `
 ]
  
  })
  export class EventListComponent implements  OnInit {
      events:IEvent[]
   constructor(private eventService:EventService,private toastrService:ToastrService){
      
   }
   ngOnInit(){
    this.events=this.eventService.getEvent();
   }
   handleThumbnail(eventName){
       this.toastrService.success(eventName)
   }
  
  }