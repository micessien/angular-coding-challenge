import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth) { }
  // Loggin user
  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=> {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  
  // Signup user
  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=> {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  // Signout user
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
