import { Component, OnInit } from '@angular/core';
import { Entrepot } from 'src/app/model/entrepot';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-entrepot',
  templateUrl: './create-entrepot.component.html',
  styleUrls: ['./create-entrepot.component.css']
})
export class CreateEntrepotComponent implements OnInit {

  entrepotObj : Entrepot = {
    libelle: '',
    superficie: 0,
    placer: '',
    longitude: '',
    latitude: ''
  }
  libelle: string = ''
  superficie: number = 0
  placer: string = ''
  longitude: string = ''
  latitude: string = ''

  constructor(private auth: AuthService, private data: DataService, private router: Router) {}

  ngOnInit(): void {
    // console.log('User connected------', localStorage.getItem('token'))
    if (localStorage.getItem('token') !== 'true') {
      this.router.navigate(['/login'])
    }
  }

  signOut() {
    this.auth.logout()
  }

  resetForm() {
    this.libelle = ''
    this.superficie = 0
    this.placer = ''
    this.longitude = ''
    this.latitude = ''
  }

  addEntrepot() {
    if (this.libelle == '' || this.superficie == 0 || this.placer == '' || this.longitude == '' || this.latitude == '') {
      return alert('Fill all input fields')
    }
    
    this.entrepotObj.libelle = this.libelle
    this.entrepotObj.superficie = this.superficie
    this.entrepotObj.placer = this.placer
    this.entrepotObj.longitude = this.longitude
    this.entrepotObj.latitude = this.latitude

    if (window.confirm('Voulez-vous enregistrer ?')) {
      this.data.addEntrepot(this.entrepotObj)
      alert('Entrepot enregistre avec success!')
      return this.resetForm()
    }else{
      this.router.navigate(['/dashboard'])
    }

  }

}
