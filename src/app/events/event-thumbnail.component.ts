
import { Component,Input, Output,EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';
 
@Component({
    selector: 'event-thumbnail',
    template:`
     
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
    <div>
    Name:{{event.name}}
    </div> 
    <div>Date:{{event.date}}</div>
    <div></div>
    <div [ngStyle]="setTextBold()" [ngSwitch]="event.time"   >
    Time:{{event.time}}
    <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
    <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
    <span *ngSwitchDefault> (Normal Start)</span>
    </div>
    <div>Price:\${{event.price}}</div>
    <div *ngIf="event.location">

    <span>Location:{{event.location.address}},</span>
   
    <span >{{event.location.country}}</span>
    </div>
    <div *ngIf="event.onlineUrl">
    <div>OnlineUrl:{{event.onlineUrl}}</div>
    </div>
    <br>
    <div>Logo:<img [src]="event.imageUrl" height="50" width="50"></div>
    </div>
    `,
    styles:[`
     
      .thumbnail{min-height:220px;}
      .well div {color:white;}
      `
    ]
     
  
  })
  export class EventThumbnail {
  @Input() event:IEvent
  /*
  @Output() eventClick=new EventEmitter
  click={
      name:"Megha Kejadiwal",
      Organization:"Capgemini"
  }
  handleclick(){
this.eventClick.emit(this.click);
  }
*/
setTextBold(){
  if(this.event.time==='8:00 am'){
    return {color:'gold','font-style':'italic'}
   }
  return {}
}
 
  }