import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from '../model/guest.model';
import { Observable } from 'rxjs';
import { BaseCode } from '../model/baseCode';
import { TM } from '../model/TM.model';


@Injectable({ providedIn: 'root' })
export class GuestService {

  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://localhost:44390/api/Guest/';

  getGuest() : Observable<Guest> {
    return this.http.get<Guest>(this.baseUrl+'GetGuestList');
  }
  
  getGuestById(id: number): Observable<Guest> {
    return this.http.get<Guest>(this.baseUrl +'GetGuestsById?id='+ id);
  }
  getCategoryById(id: number): Observable<string> {
    return this.http.get<string>(this.baseUrl +'GetCategoryById?id='+ id);
  }
  getGuestByCategory(parameter:string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl +'GetGuestsByCategory?category='+ parameter);
  }

   AddGuest(guest: Guest): Observable<any> {
    return this.http.put<Guest>(this.baseUrl+'PutGuest/', guest);
  }
  AddAllGuests(guests: Guest[]): Observable<any> {
    return this.http.put<Guest>(this.baseUrl+'PutGuests/', guests);
  }
  // AddTM(guest_3TM: TM): Observable<any> {
  //   return this.http.put<Guest>(this.baseUrl+'PutGuestTM/', guest_3TM);
  // }
  AddTMList(guest_3TM:TM[]): Observable<any> {
    return this.http.put<Guest>(this.baseUrl+'PutGuestTM/', guest_3TM);
  }
  updateGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.baseUrl + 'PostGuest/', guest);
  }
  getAllGuests(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'GetGuestList');
  }
     //  מהשרת אמור לקבל את האורח ולמחוק אותו
  deleteGuest(id: number): Observable<Guest> {
    return this.http.delete<Guest>(this.baseUrl +'deleteGuestById?id='+ id);
  }
  getCatagoryList(): Observable<BaseCode[]> {
    return this.http.get<BaseCode[]>(`${this.baseUrl}GetCatagoryList`);
  }
  }
