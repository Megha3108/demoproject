import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/user/auth.service';
import { LoginComponent } from 'src/user/login.component';
import { ProfileComponent } from 'src/user/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { ToastrService } from './common/toastr.service';
import { EventAppComponent } from './event-app.component';
import { CreateNewEvent } from './events/create-event.component';
import { EventDetailComponent } from './events/event-details/event-details.components';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnail } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnail,
    EventDetailComponent,
    NavBarComponent,
    CreateNewEvent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService,ToastrService,AuthService],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
