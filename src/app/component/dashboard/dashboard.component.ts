import { Component, OnInit } from '@angular/core';
import { Entrepot } from 'src/app/model/entrepot';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
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

  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    this.getAllEntrepots()
  }

  // register() {
  //   this.auth.logout()
  // }

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

    this.data.addEntrepot(this.entrepotObj)
    return this.resetForm()
  }

  updateEntrepot() {

  }

  deleteEntrepot(entrepot: Entrepot, id: string) {
    if (window.confirm('Are you sure you want to delete '+entrepot.libelle+' ?')) {
      this.data.deleteEntrepot(id)
    }
  }

}
