import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilConsultComponent } from './perfil-consult.component';

describe('PerfilConsultComponent', () => {
  let component: PerfilConsultComponent;
  let fixture: ComponentFixture<PerfilConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
