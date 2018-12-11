import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAccesoAdminComponent } from './control-acceso-admin.component';

describe('ControlAccesoAdminComponent', () => {
  let component: ControlAccesoAdminComponent;
  let fixture: ComponentFixture<ControlAccesoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlAccesoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAccesoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
