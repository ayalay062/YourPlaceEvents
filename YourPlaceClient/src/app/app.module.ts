import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { NewEvent2Component } from './components/new-event-two/new-event2.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import {FormsModule, ReactiveFormsModule ,FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule ,FormGroup, FormBuilder, Validators} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmParticipationComponent } from './components/confirm-participation/confirm-participation.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { RouterModule, RouterState, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { NewUserComponent } from './components/new-user/new-user.component';
import { LoginComponent } from './components/login/login.component';
import { AddGuestComponent } from './guest/add-guest/add-guest.component';
import { EditGuestComponent } from './guest/edit-guest/edit-guest.component';
import { ListGuestsComponent } from './guest/list-guests/list-guests.component';
//import { MaterialModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { NewEventThreeComponent } from './components/new-event-three/new-event-three.component';
import { UploadXlComponent } from './guest/upload-xl/upload-xl.component';
import { SeatingArrangementComponent } from './components/seating-arrangement/seating-arrangement.component';
import { ViewEventComponent } from './components/view-event/view-event.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './components/login/auth.guard';
//import { myServer } from './service';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';
//import '~bootstrap/dist/css/bootstrap.min.css';
//import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    NewEventComponent,
    NewEvent2Component,
    ConfirmParticipationComponent,
    RemindersComponent,
    NewUserComponent,
    LoginComponent,
    AddGuestComponent,
    EditGuestComponent,
    ListGuestsComponent,
    NewEventThreeComponent,
    UploadXlComponent,
    SeatingArrangementComponent,
    ViewEventComponent,
    AboutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDialogModule,
    //MaterialModule,            // <----- this module will be deprecated in the future version.
    //MatDatepickerModule,        // <----- import(must)
    // MatNativeDateModule,        // <----- import for date formating(optional)
    //MatMomentDateModule,
    //MaterialModule,
    // MaterialModule,
    //  MatDatepickerModule,        // <----- import(must)
    //  MatNativeDateModule,        // <----- import for date formating(optional)
    //MatMomentDateModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    // MatSliderModule
  ],
  providers: [AuthGuard
    // myServer
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
