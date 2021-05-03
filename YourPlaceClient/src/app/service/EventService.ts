import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event.model';
import { BaseCode } from '../model/baseCode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  Event: Event[] = [];
  baseApiUrl = "https://localhost:44390/api/Event/"

  constructor(private http: HttpClient) {
    this.getEventType();
  }
  getEventType(): Observable<BaseCode[]> {
    return this.http.get<BaseCode[]>(`${this.baseApiUrl}GetEventType`);
  }
  createEvent(event: Event): Observable<number> {
    return this.http.post<any>(this.baseApiUrl + 'postEvent', event);
  }
  // GetEventByCode(c: number): Observable<Event> {
  //   return this.http.get<Event>(this.baseApiUrl + 'GetEventByCode', c);
  // }
  GetEventByUser(id: any): Observable<any> {
    return this.http.get<Event>(this.baseApiUrl + 'GetEventByUID', id);
  }
  postCategoryiesList(catagoryList:BaseCode[]):Observable<BaseCode[]>{
    return this.http.post<BaseCode[]>(this.baseApiUrl+"PostCategoryiesList",catagoryList);
  }
  // Returns an observable 
  upload(file): Observable<any> {
    // Create form data 
    const formData = new FormData();
    // Store form name as "file" with file data 
    formData.append("file", file, file.name);
    return this.http.post(`${this.baseApiUrl}UploadJsonFile`, formData)

  }
  GetEventFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44390/api/Event/Get');
  }

  getEvents(): Promise<Event[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(this.Event);
      }, 1);
    });
  }
  updateGuest(event: Event): Observable<Event> {
    return this.http.post<Event>(this.baseApiUrl + 'PutEvent/', event);
  }
  updateEventType(parameter: number): Observable<boolean> {
    let url = 'https://localhost:44390/api/Users/UpdateEventType';
    return this.http.post<boolean>(url, parameter);
  }
 
}
