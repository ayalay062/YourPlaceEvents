import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/EventService';
import { Event } from '../../model/event.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  EEvent = new FormGroup({});
  eventE:Event;
  //אמור להיות זהות של בעל הארוע
id=206957615;

  constructor(public eventService:EventService,private formBuilder: FormBuilder ) {
     this.eventService.GetEventByUser(this.id).subscribe(
    response=>{console.log(response);
      console.log("uykbvutnr"+this.id);
      this.eventE=response;
    },
    error=>{ console.log(error);
    }) }
 
  ngOnInit(): void {
    this.EEvent = this.formBuilder.group({
      event_des: ['', Validators.required],
      event_date: ['', Validators.required],
      invitation_file: ['', Validators.required],
      due_date:[''],
        num_tables: ['', Validators.required],
        num_places_around_a_table: ['', Validators.required],
    },);
  }
  EditEvent(event:Event):void{

    //כשלוחץ על הכפתור נשמי=רים השינויים
    this.eventService.updateGuest(this.EEvent.value).subscribe(
    response=>{console.log(response);
      this.eventE=response;
    },
    error=>{ console.log(error);
    }) 

  }
}
