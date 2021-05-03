export class Guest{
    guest_id: number;
    guest_last_name: string;
    guest_first_name: string;
    guest_tz: string;
    guest_email: string;
    event_id:number;
    gender:string;
    table_id:number;
    guest_message_befor:string;
    guest_message_after:string;
    guest_category_id:number;
  constructor(
    id,
last_name,
first_name,
tz,
email,
event_id,
gen,
table_id,
mes_befor,
mes_after,
catagory_id
  ) {
    this.guest_id = id;
    this.guest_last_name=last_name;
    this.guest_first_name=first_name;
    this.guest_tz=tz;
    this.guest_email=email;
    this.event_id=id;
    this.gender=gen;
    this.table_id=table_id;
    this.guest_message_befor=mes_befor;
    this.guest_message_after=mes_after;
    this.guest_category_id=catagory_id;
  }
}