import { Component, OnInit, Inject  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BaseCode } from 'src/app/model/baseCode';

// export interface DialogData {
//   id: number;
//   des: string;
// }
@Component({
  selector: 'app-new-event-three',
  templateUrl: './new-event-three.component.html',
  styleUrls: ['./new-event-three.component.css']
})
export class NewEventThreeComponent implements OnInit {

  // DialogData:BaseCode=new BaseCode;
  constructor(
    public dialogRef: MatDialogRef<NewEventThreeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseCode) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  
}

