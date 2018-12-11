import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { UserInterface } from '../../../../Models/user-interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-visualizar-usuario',
  templateUrl: './visualizar-usuario.component.html',
  styleUrls: ['./visualizar-usuario.component.css']
})
export class VisualizarUsuarioComponent implements OnInit {
  emailUser: string;

  user: UserInterface = {
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    role: '',
    estado: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: AuthService
  ) { }

  ngOnInit() {
    this.getInfoUser();
  }

  getInfoUser() {
    this.emailUser = this.route.snapshot.params['email'];
    const collection = this.userService.getOneUser(this.emailUser);
    collection.subscribe(docs => {
      this.user = docs[0];
      console.log(this.user);
    });
  }

}
