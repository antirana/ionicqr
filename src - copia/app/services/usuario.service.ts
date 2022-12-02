import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, setDoc, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Auth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore,private auth:Auth) { }

  getUsuarios():Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore,'usuarios');
    return collectionData(usuariosRef, {idField:'id'}) as Observable<Usuario[]>;
  }

  getUsuarioById(id:string):Observable<Usuario>{
    const usuarioRef = doc(this.firestore,`usuarios/${id}`);
    return docData(usuarioRef, {idField:'id'}) as Observable<Usuario>;
  }


  async addUsuario(usuario:Usuario) {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `usuarios/${user?.uid}`);
      await setDoc(userDocRef,{
        usuario,
      });

    
  }


  updateUsuario(usuario:Usuario) {
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return updateDoc(usuarioRef, 
      {
        name:usuario.name,
        lastname:usuario.lastname,
        gender:usuario.gender,
        age:usuario.age,
        email:usuario.email,
        image:usuario.image
      }
    );
  }

  deleteUsuario(usuario:Usuario){
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return deleteDoc(usuarioRef);
  }

  
}
