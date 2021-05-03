import { Component, Inject, OnInit } from '@angular/core';
import { Table } from '../../model/tables.model';
import { AuthenticationService } from '../../service/authentication.server';
import { AlertService } from '../../service/alert.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewEventComponent } from '../new-event/new-event.component';
import { NewEventThreeComponent } from '../new-event-three/new-event-three.component';
import { BaseCode } from 'src/app/model/baseCode';
import { EventService } from '../../service/EventService';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-new-event2',
  templateUrl: './new-event2.component.html',
  styleUrls: ['./new-event2.component.css'],
})
export class NewEvent2Component implements OnInit {
  animal: string[] = [];
  public catagryList:BaseCode[]=[];
  nameCatagroy: string;
  idCatagory:number=8;

  constructor(
    public eventService:EventService,
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService //private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
   
  }
  // getcategoryList(){
  //   return this.catagryList;
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewEventThreeComponent, {
      width: '250px',
      data: {name: this.nameCatagroy}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.catagryList);
     if(result)
      this.catagryList.push( new BaseCode(this.idCatagory++, result));
    });
  }

  onUploudExel() {
    this.router.navigate(['upload-xl']);
    // this.eventService.createEvent(this.creatEvent.value) .subscribe( data => {
    //   this.router.navigate(['new-event2']);
    // });
    
  }

  addGuest() {    
     this.eventService.postCategoryiesList(this.catagryList) .subscribe( data => {
      this.router.navigate(['add-guest']);
    });
    
  }


}

