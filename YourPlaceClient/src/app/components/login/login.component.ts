import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { LogInService } from '../../service/logIn.service';
import { AuthenticationService } from '../../service/authentication.server';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../../model/login.model'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../new-event-two/new-event2.component';
import { BaseCode } from 'src/app/model/baseCode';
import { first } from 'rxjs/operators';
import { AlertService } from '../../service/alert.service';
//import Swal from 'sweetalert2';
@Component({ templateUrl: 'login.component.html',styleUrls:['login.component.css'] })

export class LoginComponent implements OnInit {

  //user: User;
  user: User[];
  loading = false;
  submitted = false;
  returnUrl: string;
  alertService: any;
  login: Login;
  nameCatagroy: any;
  private formSubmitAttempt: boolean; 

  loginForm = new FormGroup({
    user_email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    user_password: new FormControl('', [Validators.required])
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private logInService: LogInService,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService //private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      useremail: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  register(): void {
    this.router.navigateByUrl('/new-user');
  };
  onSubmit() {
    
    let dataToSave = this.loginForm.value;
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.formSubmitAttempt = true;             // {8}
      return;
    }
    this.logInService.login(dataToSave.useremail, dataToSave.password).subscribe(
      response => {
        console.log(response);
        console.log('res ' + response);
        if (response) {
        //  Swal.fire("Success","You are logged in","success");


       
          this.router.navigateByUrl('/new-event');


        }
        else
          //ניסיתי את הדיאלוג הזה
          this.openDialog();
        //  alert ("you need to register-can't log in.username or password are incorrect");
      },
      error => {
       // Swal.fire("Error","You need to register-can't log in. username or password are incorrect","error");

     console.log(error + "user is not found");
      })

  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog { }


  // export class DialogContentExampleDialog {
  //   constructor(
  //     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //     @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  //   onNoClick(): void {
  //     this.dialogRef.close('no');
  //   }

  //   yes() {
  //     this.dialogRef.close('yes');
  //   }

  // }
  // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //   width: '250px',
  //   height: '250px',
  //   data: { title: 'error', content: "no schools were entered", showNo: false, no: 'no', yes: 'ok' }
  // });
  // dialogRef.afterClosed().subscribe(result => {
  // });



