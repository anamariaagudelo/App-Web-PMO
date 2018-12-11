import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientesAdminComponent } from './gestion-clientes-admin.component';

describe('GestionClientesAdminComponent', () => {
  let component: GestionClientesAdminComponent;
  let fixture: ComponentFixture<GestionClientesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionClientesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClientesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
