import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GuestService}from '../../service/guest.service';
import {first} from "rxjs/operators";
import { Guest } from 'src/app/model/guest.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit {

  guest: Guest;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private guestService: GuestService,private http: HttpClient) { }

  ngOnInit() {
    let guestId = window.localStorage.getItem("editGuestId");
    let eguest_first_name=window.localStorage.getItem("editguest_first_name");
    let eguest_last_name=window.localStorage.getItem("editguest_last_name");
    let egender=window.localStorage.getItem("editgender");
    let eguest_email=window.localStorage.getItem("editguest_email");
    let eguest_message_before=window.localStorage.getItem("editguest_message_before");
    let eguest_message_after=window.localStorage.getItem("editguest_message_after");
    // console.log('guestname ' + eguest_first_name);
    // console.log('gueslasttname ' + eguest_last_name);

    if(!guestId) {
     // Swal.fire("Error","Invalid action.","error");

      this.router.navigate(['list-guests']);
      return;
    }
  
    this.editForm = this.formBuilder.group({

      guest_id: guestId,
      guest_first_name: eguest_first_name,
      guest_last_name: eguest_last_name,
      guest_email: eguest_email,
      gender: egender,
      guest_message_befor:eguest_message_before,
       guest_message_after: eguest_message_after
       
      //לא מכיר למלא את הערכים
      //לא יודעת למה לא עובד זה כמו מאיפה
      //https://www.devglan.com/angular/angular-8-crud-example
      //ומשום מה לא מכיר את הערכים בשום אופן
     // eguest_first_name:window.localStorage.getItem("editguest_first_name"),
             // guest_first_name: ['', Validators.required],
      // guest_last_name: ['', Validators.required],
      // guest_tz: ['', Validators.required],
      // guest_email: ['', Validators.required],
      // gender: ['', Validators.required],
      // guest_message_befor: ['', Validators.required],
      // guest_message_after: ['', Validators.required]
    });
    this.guestService.getGuestById(+guestId)
    .subscribe( data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() { 
    //עובר לעמוד הרשימה
    this.router.navigate(['list-guests']);
  }
    
  EditGuest(guest:Guest):void{
    console.log("id-2:",this.editForm.value);

      //כשלוחץ על הכפתור נשמי=רים השינויים
      this.guestService.updateGuest(this.editForm.value).subscribe(
      response=>{console.log(response);
        this.guest=response;
      },
      error=>{ console.log(error);
      }) 

    }
}
