import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-coding-challenge';
  isSignedIn = false
  constructor(public firebaseServices : FirebaseService){}
  ngOnInit() {
    if (localStorage.getItem('user') !== null)
    this.isSignedIn = true
      else
    this.isSignedIn = false
  }

  async onSignup(email:string,password:string){
    await this.firebaseServices.signup(email,password)
    if (this.firebaseServices.isLoggedIn)
    this.isSignedIn = true
  }

  async onSignin(email:string,password:string){
    await this.firebaseServices.signin(email,password)
    if (this.firebaseServices.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn = false
  }
}
