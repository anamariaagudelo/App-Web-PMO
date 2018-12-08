import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../Models/user-interface';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  users: UserInterface[];

  constructor(public authService: AuthService) { }

  ngOnInit() {
   this.todosUsuarioss();
  }

  todosUsuarioss() {
    this.authService.getAllUsers().subscribe(users => this.users = users);
  }
}
