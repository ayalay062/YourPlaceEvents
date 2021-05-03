import { Component, OnInit } from '@angular/core';
import { LogInService } from '../service/logIn.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(private loginService: LogInService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.loginService.isLoggedIn; // {2}
  }
  onLogout(){
    this.loginService.logout();                      // {3}
  }
}
