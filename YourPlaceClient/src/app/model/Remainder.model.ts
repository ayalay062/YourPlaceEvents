export class Reminder{
    eventId:number;
    body1 :string;
  subject:string;
  constructor(eventId,body,subject)
  {
      this.eventId=eventId;
      this.body1=body;
      this.subject=subject;
  }
}