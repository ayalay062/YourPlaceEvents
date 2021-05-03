import { Component, OnInit, Inject } from '@angular/core';
import { Guest } from '../../model/guest.model';
import { Router } from "@angular/router";
import { GuestService } from '../../service/guest.service';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SharedService} from '../../service/sharedServices';


@Component({
  selector: 'app-list-guests',
  templateUrl: './list-guests.component.html',
  styleUrls: ['./list-guests.component.css'],
  providers: [SharedService],

})
export class ListGuestsComponent implements OnInit {
  guests: any;
  guest: Guest;

  constructor(
    private router: Router,
     private guestService: GuestService,
     private http: HttpClient,
     private SharedService:SharedService,) { 
    //פונקצית קריאה לרשימה של כל האורחים-שיטען מיד עם טעינת הקומפוננטה
    this.guestService.getAllGuests().subscribe(
      response=>{console.log(response);
        this.guests=response;
      },
      error=>{ console.log(error);
      })


  }

  ngOnInit() {

  }
  exportAsXLSX():void {
    this.SharedService.exportAsExcelFile(this.guests, 'sample');
  }
   //?
   deleteGuest(g: Guest): void {
    this.guestService.deleteGuest(g.guest_id)
      .subscribe( data => {
        this.guests = this.guests.filter(u => u !== g);
      })
   };

  addGuest(): void {
    this.router.navigate(['add-guest']);
  };
  //א:ו שעורכים בקומפוננטה הזאת
    editGuest(g):void{
      console.log('guest ' + JSON.stringify(g));
    // this.guestService.updateGuest(guest).subscribe(
    // response=>{console.log(response);
    //   this.guest=response;
    // },
    // error=>{ console.log(error);
    // }) 
    window.localStorage.setItem('editGuestId', g.guest_id);
    window.localStorage.setItem('editguest_first_name', g.guest_first_name);
    window.localStorage.setItem('editguest_last_name', g.guest_last_name);
    window.localStorage.setItem('editguest_gender', g.guest_gender);
    window.localStorage.setItem('editguest_email', g.guest_email);
    window.localStorage.setItem('editguest_message_before', g.guest_message_befor);
    window.localStorage.setItem('editguest_message_after', g.guest_message_after);


    this.router.navigate(['edit-guest']);

  }
  //לכאורה אמור לשלוח בניתוב גם את האורח שאמור לערוך
  // editGuest():void{
  //   this.router.navigate(['edit-guest']);
  // }

  //הפונקציה נכתבה בתוך הקונסטרקטור כי אמור לעלות מיד עם טעינה
// getGuests():void{
// this.guestService.getAllGuests().subscribe(
// response=>{console.log(response);
//   this.guest=response;
// },
// error=>{ console.log(error);
// })
//}
  
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    