export class TM{
    table_members_id:number;
    guest_id:number;
    friend_id:number;
    like_or_not:boolean;
    guestPriority:number;  
  constructor(
    table_members_id,
    guest_id,
    friend_id,
    like_or_not,
    guestPriority,
  ) {
    this.table_members_id = table_members_id;
    this.guest_id=guest_id;
    this.friend_id=friend_id;
    this.like_or_not=like_or_not;
    this.guestPriority=guestPriority;
  }
}