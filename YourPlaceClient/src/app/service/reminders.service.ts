import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../model/guest.model';
import { Observable } from 'rxjs';
import { BaseCode } from '../model/baseCode';
import { Reminder } from '../model/Remainder.model';

import { TM } from '../model/TM.model';


@Injectable({ providedIn: 'root' })
export class ReminderService {
    constructor(private http: HttpClient) {}
  baseUrl: string = 'https://localhost:44390/api/Email/';

  SentInvations(Reminder:Reminder): Observable<Guest> {
    return this.http.get<any>(this.baseUrl +'SendEmailToAllGuest'+ Reminder);
  }
  SentToAll(Reminder:Reminder): Observable<Guest> {
    return this.http.get<any>(this.baseUrl +'SendEmailToAllGuest'+ Reminder);
  }
  SendToNotConfirmed(Reminder:Reminder): Observable<Guest> {
    return this.http.get<any>(this.baseUrl +'SentGuestNotConfirmedMail'+ Reminder);
  }
  SendToConfirmed(Reminder:Reminder): Observable<Guest> {
    return this.http.get<any>(this.baseUrl +'SentGuestConfirmedMail'+ Reminder);
  }
}