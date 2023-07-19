import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore'
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = 'students';

  constructor(private firestore: Firestore) { }

  // Add Student
  addStudent(student: Student) {
    const collectionInstance = collection(this.firestore, this.dbPath)
    return addDoc(collectionInstance, student)
  }

  // get all student
  getAllStudents() {
    const collectionInstance = collection(this.firestore, this.dbPath)
    return collectionData(collectionInstance, {idField: 'id'})
  }

  // delete student
  deleteStudent(id: string) {
    const docInstance = doc(this.firestore, this.dbPath, id)
    return deleteDoc(docInstance)
  }

  // update student
  updateStudent(id: string, updateDate: any) {
    const docInstance = doc(this.firestore, this.dbPath, id)
    return updateDoc(docInstance, updateDate)
  }

}
