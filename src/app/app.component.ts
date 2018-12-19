import { Component } from '@angular/core';
import { PreloaderService } from './services/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Web-PMO';


  constructor( public preloader: PreloaderService ) {

  }
}
