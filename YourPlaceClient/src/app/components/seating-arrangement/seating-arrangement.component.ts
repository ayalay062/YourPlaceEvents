import { Component, OnInit } from '@angular/core';
import { Table } from '../../model/tables.model';
import { SeatingService } from '../../service/SeatingService';

@Component({
  selector: 'app-seating-arrangement',
  templateUrl: './seating-arrangement.component.html',
  styleUrls: ['./seating-arrangement.component.css']
})
export class SeatingArrangementComponent implements OnInit {

  constructor(private SeatingService: SeatingService,
    ) { }
  SeatingArrangemant:Table[];

  ngOnInit(): void { 
     this.SeatingService.getSeatingArrangemant().subscribe((data) =>{this.SeatingArrangemant=data;});

  }

}
