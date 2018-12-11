import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar-admin',
  templateUrl: './nabvar-admin.component.html',
  styleUrls: ['./nabvar-admin.component.css']
})
export class NabvarAdminComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.logout();
   }

   buscarProyecto(termino: string) {
    this.router.navigate(['/buscador', termino]);

  }
}
