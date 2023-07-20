import { Component, OnInit } from '@angular/core';
import { Entrepot } from 'src/app/model/entrepot';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router'

type EntrepotList = {
  id: string,
  libelle: string,
  superficie: number,
  placer: string,
  longitude: string,
  latitude: string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  entrepotsList : EntrepotList[] = []
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
    // Get all Entrepots
    this.getAllEntrepots()
  }

  signOut() {
    this.auth.logout()
  }

  getAllEntrepots() {
    this.data.getAllEntrepots().subscribe(res => {
      console.log('Data------', res)
      this.entrepotsList = res.map((e: any) => {
        return e
      })

    }, err => {
      alert('Error while fetching entrepot data')
    })
  }

  deleteEntrepot(entrepot: Entrepot, id: string) {
    if (window.confirm('Are you sure you want to delete '+entrepot.libelle+' ?')) {
      this.data.deleteEntrepot(id)
    }
  }

}
