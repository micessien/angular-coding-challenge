import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from '@angular/fire/auth';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$ = authState(this.fireauth);

  constructor(private fireauth: Auth, private router: Router) { }

  // Login method
  login(email: string, password: string){
    signInWithEmailAndPassword(this.fireauth, email,password).then(res => {
      localStorage.setItem('token','true')

      // Check if email is verified
      if (res.user?.emailVerified == true) {
        this.router.navigate(['/dashboard'])
      }else{
        this.router.navigate(['/verify-email'])
      }
    }, err => {
      alert(err.message)
      this.router.navigate(['/login'])
    })
  }

  // Register method
  register(email: string, password: string){
    createUserWithEmailAndPassword(this.fireauth, email,password).then(res => {
      alert('Registration Successful')
      this.router.navigate(['/login'])
      this.sendEmailForVerification(res.user)
    }, err => {
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }

  // Sign out
  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message)
    })
  }

  // forgot password
  forgotPassword(email: string) {
    sendPasswordResetEmail(this.fireauth, email).then(() => {
      this.router.navigate(['/verify-email'])
    }, err => {
      alert('Something went wrong!')
    })
  }

  // Send email verification
  sendEmailForVerification(user: any) {
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/verify-email'])
    }, (err: any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

}
