import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar-consult',
  templateUrl: './nabvar-consult.component.html',
  styleUrls: ['./nabvar-consult.component.css']
})
export class NabvarConsultComponent implements OnInit {

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
