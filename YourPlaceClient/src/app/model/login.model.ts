export class Login{
    username: string;
    useremail: string;
    password:string
  constructor(
    username,
    useremail,
    password
  ) {
    this.username = username;
    this.useremail=useremail;
    this.password=password;
  }
}