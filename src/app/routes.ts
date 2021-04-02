import { EventDetailComponent } from "./events/event-details/event-details.components";
import { EventListComponent } from "./events/event-list.component";
import {Routes} from '@angular/router'
import { CreateNewEvent } from "./events/create-event.component";
import { LoginComponent } from "src/user/login.component";
import { ProfileComponent } from "src/user/profile.component";
export const appRoutes:Routes=[
    {path:'events/new',component:CreateNewEvent},
    {path:'events', component:EventListComponent},
    {path:'events/:id',component:EventDetailComponent},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user/login',component:LoginComponent},
    {path:'user/profile',component:ProfileComponent}
]