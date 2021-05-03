export class Event {
  public event_id: number;
  public event_type_id: number;
  public event_des: string;
  public event_date: Date;
  public due_date: Date;
  public user_id: number;
  public invitation_file: string;
  public num_tables:number;
  public num_places_around_a_table:number;
  constructor(
    code,
    type,
    des,
    date,
    DueDate,
    userId,
    invitation,
    numtables,
    placesAroundTables,
  ) {
    this.event_id = code;
    this.event_type_id = type;
    this.event_des = des;
    this.event_date = date;
    this.due_date = DueDate;
    this.user_id = userId;
    this.invitation_file = invitation;
    this.num_tables=numtables;
    this.num_places_around_a_table=placesAroundTables;
  }
}
