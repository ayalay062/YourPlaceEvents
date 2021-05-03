// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../../service/EventService';

// @Component({
//   selector: 'app-reminders',
//   templateUrl: './reminders.component.html',
//   styleUrls: ['./reminders.component.css'],
// })
// export class RemindersComponent implements OnInit {
//   shortLink: string = ""; 
//   loading: boolean = false; // Flag variable 
//   file: File = null; // Variable to store file 
//   // isLinear = false;
//   private isUploadBtn: boolean = true;  
//   onSend({ value, valid }) {
//     if (valid) {
//       console.log(value);
//     } else {
//       console.log('not valid');
//     }
//   }
//   constructor(public eventService:EventService ) {}

//   ngOnInit(): void {}
//   sendInvitationToAll():void{};
//   sendReminderToAll():void{};
//   onChange(event) { 
//     this.file = event.target.files[0]; 
//   } 
//   // OnClick of button Upload 
//   onUploadReminder() { 
//   this.loading = !this.loading; 
//   console.log(this.file); 
//   this.eventService.upload(this.file).subscribe( 
//       (event: any) => { 
//           if (typeof (event) === 'object') { 

//               // Short link via api response 
//               // this.shortLink = event.link; 

//               this.loading = false; // Flag variable  
//           } 
//       } 
//   ); 
// } 
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReminderService } from 'src/app/service/reminders.service';
//import {ReminderService} from 'src/app/service/reminders'
import { EventService } from '../../service/EventService';
import { Reminder } from '../../model/Remainder.model';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css'],
})
export class RemindersComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; // Flag variable 
  file: File = null; // Variable to store file 
  eventId: number = 7597;
  addForm: FormGroup;

  // isLinear = false;
  private isUploadBtn: boolean = true;
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }
  constructor(public eventService: EventService,
    public reminderService: ReminderService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      eventId: 7597,
      body1: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }
  sendInvitationToAll(){
    console.log(this.addForm.value);
    this.sendInvitationToAll1(this.addForm.value);
  }
  sendInvitationToAll1(reminder:Reminder): void {
    this.reminderService.SentInvations(reminder).subscribe(
      response => {
        console.log(response);
       // reminder = response;
        this.router.navigate(['/list-guests']);
      }, 
      error => {
        console.log(error);
      })
  }
  sendReminderToAll(): void { };
  sendToNotConfirmed():void{};
  sendToConfirmed():void{};
  onChange(event) {
    this.file = event.target.files[0];
  }
  // OnClick of button Upload 
  onUploadReminder() {
    this.loading = !this.loading;
    console.log(this.file);
    this.eventService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response 
          // this.shortLink = event.link; 

          this.loading = false; // Flag variable  
        }
      }
    );
  }
}
