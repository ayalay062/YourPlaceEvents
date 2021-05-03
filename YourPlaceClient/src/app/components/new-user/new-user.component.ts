import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../service/logIn.service';
// import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../service/authentication.server';
import { AlertService } from '../../service/alert.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/service/sharedServices';

// import { ConfirmedValidator } from './confirmed.validator';
//user_first_name: string,
  //user_last_name: string,
  //user_phone_number: number,
  //user_email: string,
  //user_password:string
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [LogInService,SharedService],

})
export class NewUserComponent implements OnInit {
  user: User;
  newUserForm=new FormGroup({});
  loading: boolean;
  submitted = false;
  userId :number;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private loginService:LogInService,
    private sharedService:SharedService,

  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() { 

    this.newUserForm = this.formBuilder.group({
      user_first_name: ['', Validators.required],
      user_last_name: ['', Validators.required],
      user_phone_number: ['', [
        Validators.required,
        Validators.pattern("")]],
      user_email: ['', [
        Validators.required],
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      user_password: ['', Validators.minLength(6)],
      user_confirmPassword: ['', Validators.required],
    },);
  }

  AddUser(user:User):void{

    this.loginService.AddUser(user).subscribe(
    response=>{
      console.log(response);
      this.userId=response;
      this.sharedService.currentUserId = response;
    },
    error=>{ console.log(error);
    })
    
    }
  updateUser(user:User):void{
    this.loginService.put(user).subscribe(
    response=>{console.log(response);
     // this.user=response;
    },
    error=>{ console.log(error);
    })
    
    }
    //לא מבינה למה צריך את זה -קשור לולידציה בHTML
  get f() {
    return this.newUserForm.controls;
  }
  get user_first_name() {
    return this.newUserForm.get('user_email')
  }
  get user_last_name() {
    return this.newUserForm.get('user_email')
  }
  get user_phone_number() {
    return this.newUserForm.get('user_email')
  }
  get user_email() {
    return this.newUserForm.get('user_email')
  }
  get user_password() {
    return this.newUserForm.get('user_password')
  }
  get user_confirmPassword() {
    return this.newUserForm.get('user_password')
  }

  onSubmit() {
    //בפונקציה זו בעצם אנו קוראים לפונקיה של הוספת משתמש?
    // reset alerts on submit
    console.log('here');

    // this.alertService.clear();
    
    // stop here if form is invalid
    // if (this.newUserForm.invalid) {
    //     return;
    // }
    this.AddUser(this.newUserForm.value);
   
}
  // save(): void {
  //   this.loginService.updateUser(this.user)
  //     .subscribe(() => this.goBack());
  // }
  // add(user_first_name: string,user_last_name:string,user_email:string,user_password:string,user_phone_number:string): void {
  //   user_first_name = this.user.user_first_name.trim();
  //   user_last_name =this.user.user_last_name.trim();
  //   user_email =this.user.user_email.trim();
  //   user_password =this.user.user_password.trim();
  //   user_phone_number =this.user.user_phone_number.trim();
  //   if (!user_first_name) { return; }
  //   this.loginService.AddUser({user_first_name} as User).toPromise().then(data=> this.user.user_first_name);
  //     //  .subscribe(user => {
  //     //   this.loginService.push(this.User.firstName);
  //     // });

  // }
  onSend({ value, valid }) {
    if (valid) {
      console.log(value);
    } else {
      console.log('not valid');
    }
  }
}
