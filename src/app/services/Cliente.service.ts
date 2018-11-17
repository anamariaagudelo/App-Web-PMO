import { Injectable } from '@angular/core';
import { ClienteInterface } from '../Models/cliente';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clienteColletion: AngularFirestoreCollection<ClienteInterface>;
  clienteDoc: AngularFirestoreDocument<ClienteInterface>;
  clientes: Observable<ClienteInterface[]>;
  cliente: ClienteInterface;

  constructor(
    private afs: AngularFirestore) {
    this.clienteColletion = this.afs.collection('clientes', ref => ref);
  }


  addNewCliente(cliente: ClienteInterface) {
    this.clienteColletion.add(cliente);
  }

  getAllClientes(): Observable<ClienteInterface[]> {
    this.clientes = this.clienteColletion.snapshotChanges()
      .map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as ClienteInterface;
          // data.codigo = action.payload.doc.id;
          return data;
        });
      });
    return this.clientes;
  }

  getOneCliente(codCliente: string) {

    const collection = this.afs.collection('clientes', ref => ref.where('codigo', '==', codCliente)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ClienteInterface;
        return data;
      });
    });

    return collection;
  }



  updateCliente(cliente: ClienteInterface) {
    console.log(cliente);
    this.afs.collection('clientes', ref => ref.where('codigo', '==', cliente.codigo)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ClienteInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }).subscribe(items => {
      items.forEach(client => {
        this.afs.doc(`clientes/${client.id}`).update({
          // codigo: cliente.codigo,
          nombre: cliente.nombre,
          descripcion: cliente.descripcion,
          region: cliente.region,
          pais: cliente.pais,
          mercado: cliente.mercado,
          Ncontacto: cliente.Ncontacto,
          Econtacto: cliente.Econtacto
        });
      });
    }
    );

  }

}
