import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = ''
  password: string = ''

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (localStorage.getItem('token') === 'true') {
      this.router.navigate(['/dashboard'])
    }
  }

  register() {
    if (this.email == '') {
      alert('Please enter email')
      return
    }
    if (this.password == '') {
      alert('Please enter password')
      return
    }

    this.auth.register(this.email, this.password)
    this.email = ''
    this.password = ''
  }

}
