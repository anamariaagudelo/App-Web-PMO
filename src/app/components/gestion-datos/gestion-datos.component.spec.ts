import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDatosComponent } from './gestion-datos.component';

describe('GestionDatosComponent', () => {
  let component: GestionDatosComponent;
  let fixture: ComponentFixture<GestionDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
