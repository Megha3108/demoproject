import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';
 
@Component({
templateUrl:'./event-details.component.html',
styles:[`
.container{padding-left:20px ,padding-right:20px}`
]
})
export class EventDetailComponent{
event:IEvent
constructor(private eventService:EventService,private route:ActivatedRoute){

}
ngOnInit(){
   this.event=this.eventService.getEvents(+this.route.snapshot.params['id'])
}
}