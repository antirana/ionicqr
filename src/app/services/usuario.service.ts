import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, setDoc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario,Asistencia } from './usuario';
import { Auth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore, private auth: Auth) { }

  //CONSULTAS
  getUsuarios(): Observable<Usuario[]> {
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, { idField: 'id' }) as Observable<Usuario[]>;
  }

  getUsuarioById(id: string): Observable<Usuario> {
    const usuarioRef = doc(this.firestore, `usuarios/${id}`);
    return docData(usuarioRef,) as Observable<Usuario>;
  }


  //USUARIO
  async addUsuario(usuario: Usuario) {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `usuarios/${user?.uid}`);
    await setDoc(userDocRef, {
      usuario,
    });
  }

  updateUsuario(usuario: Usuario) {
    const user = this.auth.currentUser;
    const usuarioRef = doc(this.firestore, `usuarios/${user?.uid}`);
    return updateDoc(usuarioRef,
      {
        name: usuario.name,
        lastname: usuario.lastname,
        gender: usuario.gender,
        age: usuario.age,
        email: usuario.email,
      }
    );
  }

  deleteUsuario(usuario: Usuario) {
    const user = this.auth.currentUser;
    const usuarioRef = doc(this.firestore, `usuarios/${user?.uid}`);
    return deleteDoc(usuarioRef);
  }

  //QR
  async addAsistencia(asistencia: Asistencia) {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `asistencia/${user?.uid}`);
    await setDoc(userDocRef, {
      asistencia,
    });
  }
}
