import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LogInService {
  User: User[] = [];
  private loggedIn = new BehaviorSubject<boolean>(false);
  baseUrl = 'https://localhost:44390/api/UserLogin/';

  constructor(private http: HttpClient,private router: Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  AddUser(user: User): Observable<number> {
    return this.http.put<any>(this.baseUrl + 'PutUser/', user);
  }

  login(useremail: string, password: string): Observable<any[]> {
    this.loggedIn.next(true);
    this.router.navigate(['/new-event']);
    return this.http.get<any>(this.baseUrl + 'Login?useremail=' + useremail + '&password=' + password);
  }

  logout() {                            // {4}
  this.loggedIn.next(false);
  this.router.navigate(['/about']);
}

  register(user: User) {
    return this.http.post(`register`, user);
  }
  put(user: User) {
    return this.http.put(`/users`, user);
  }
  sendEmailToUser(useremail: string): Observable<any[]> {
    return this.http.get<any>('https://localhost:44390/api/Email/SendEmail?to=' + useremail + '?body=welcome to our site');
  }
  
  // GetUserFromServer(): Observable<any[]> {
  //   return this.http.get<any[]>('https://localhost:44390/api/User/GetUser');
  // }
  //יותר טוב
  GetUserFromServer() {
    return this.http.get<any[]>(this.baseUrl + 'GetUser').toPromise().then(result => { return result; }).catch(err => { return false; });
  }
}
