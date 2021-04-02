import{Component} from '@angular/core'
import { Router } from '@angular/router'
@Component({
selector:'create-event',
template:`
<h2>Create New Event</h2>
<hr/>
<br>
<div class="col-md-6">
<h3>New event goes here</h3>
<button class="btn btn-info">Save</button>
<button class="btn btn-danger" (click)="cancel()">Cancel</button>
</div>
`
})
export class CreateNewEvent{
    constructor(private route:Router){

    }
cancel(){
    this.route.navigate(['/events'])
}
}