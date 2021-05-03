export class TMVM{
    table_members_id?:number;
    tm_full_name?:string;
    guest_id?:number;
    friend_id?:number;
    like_or_not?:boolean;
    guestPriority?:number;  
  constructor(
    table_members_id,
    tm_full_name,
    guest_id,
    friend_id,
    like_or_not,
    guestPriority,
  ) {
      this.tm_full_name=tm_full_name;
    this.table_members_id = table_members_id;
    this.guest_id=guest_id;
    this.friend_id=friend_id;
    this.like_or_not=like_or_not;
    this.guestPriority=guestPriority;
  }
}