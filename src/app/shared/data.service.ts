import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore'
import { Entrepot } from '../model/entrepot';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = 'entrepots';

  constructor(private firestore: Firestore) { }

  // Add Entrepot
  addEntrepot(entrepot: Entrepot) {
    const collectionInstance = collection(this.firestore, this.dbPath)
    return addDoc(collectionInstance, entrepot)
  }

  // get all Entrepot
  getAllEntrepots() {
    const collectionInstance = collection(this.firestore, this.dbPath)
    return collectionData(collectionInstance, {idField: 'id'})
  }

  // delete Entrepot
  deleteEntrepot(id: string) {
    const docInstance = doc(this.firestore, this.dbPath, id)
    return deleteDoc(docInstance)
  }

  // update entrepot
  updateEntrepot(id: string, updateDate: any) {
    const docInstance = doc(this.firestore, this.dbPath, id)
    return updateDoc(docInstance, updateDate)
  }

}
