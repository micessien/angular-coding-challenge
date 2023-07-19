import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
type StudentList = {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  mobile: string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentsList : StudentList[] = []
  studentObj : Student = {
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  }
  first_name: string = ''
  last_name: string = ''
  email: string = ''
  mobile: string = ''

  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    this.getAllStudents()
  }

  // register() {
  //   this.auth.logout()
  // }

  getAllStudents() {
    this.data.getAllStudents().subscribe(res => {
      console.log('Data------', res)
      this.studentsList = res.map((e: any) => {
        return e
      })

    }, err => {
      alert('Error while fetching student data')
    })
  }

  resetForm() {
    this.first_name = ''
    this.last_name = ''
    this.email = ''
    this.mobile = ''
  }

  addStudent() {
    if (this.first_name == '' || this.last_name == '' || this.email == '' || this.mobile == '') {
      alert('Fill all input fields')
    }
    
    this.studentObj.email = this.email
    this.studentObj.mobile = this.mobile
    this.studentObj.first_name = this.first_name
    this.studentObj.last_name = this.last_name

    this.data.addStudent(this.studentObj)
    this.resetForm()
  }

  updateStudent() {

  }

  deleteStudent(student: Student, id: string) {
    if (window.confirm('Are you sure you want to delete '+student.first_name+' '+student.last_name+' ?')) {
      this.data.deleteStudent(id)
    }
  }

}
