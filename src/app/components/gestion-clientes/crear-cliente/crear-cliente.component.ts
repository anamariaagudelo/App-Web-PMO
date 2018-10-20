import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  codigo: string;
  nombre: string;
  descripcion: string;
  region: string;
}

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;



  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('clientes');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe((respuesta) => console.log(respuesta[0].codigo));
  }

  ngOnInit() {
  }

  test() {
    console.log('hola');
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
    console.log('objeto guardado');
  }
}


