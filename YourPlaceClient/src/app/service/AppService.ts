import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseCode } from '../model/baseCode';

@Injectable()
export class AppService {
    api_url: string;

    constructor(private http: HttpClient, public injector: Injector) {
        this.api_url ='https://localhost:44390/api/';

    }

    getHeaders() {
        return new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    }

    post({ path , body = {} }):Observable<any> {
        return this.http.post(`${this.api_url}${path}`, JSON.stringify(body), {headers: this.getHeaders(), observe: 'response'})
        .pipe(catchError((err) => err).apply(res => {return res}).share());
    }
    put( path:string, body:object = {} ): Observable<any> {
        return this.http.put(`${this.api_url}${path}`, JSON.stringify(body), {headers: this.getHeaders(), observe: 'response'})
        .pipe(catchError((err) => err).apply(res => {return res}).share());
    }
    get( path:string): Observable<any> {
        return this.http.get<BaseCode>(`${this.api_url}${path}`);//, {headers: this.getHeaders(), observe: 'response'});
        //.pipe(catchError((err) => err).apply(res => {return res}).share());
    }
    getbyId( path:string, params:HttpParams=new HttpParams() ): Observable<any> {
        return this.http.get(`${this.api_url}${path}`, {headers: this.getHeaders(),params: params, observe: 'response'})
        .pipe(catchError((err) => err).apply(res => {return res}).share());
    }
   delete( path:string): Observable<any> {
        return this.http.get(`${this.api_url}${path}`, {headers: this.getHeaders(), observe: 'response'})
        .pipe(catchError((err) => err).apply(res => {return res}).share());
    }
}