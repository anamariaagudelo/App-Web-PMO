import { Injectable } from '@angular/core';
import { Observable, of, Subject, Subscription, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PreloaderService {


  loadings: Observable<boolean> = Observable.of(false);

  constructor() { }


  fireLoader() {
    this.loadings = Observable.of(true);
  }

  stopLoader() {
    this.loadings = Observable.of(false);
  }
}
