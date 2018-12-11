import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosConsultComponent } from './proyectos-consult.component';

describe('ProyectosConsultComponent', () => {
  let component: ProyectosConsultComponent;
  let fixture: ComponentFixture<ProyectosConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
