import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproyectosConsultComponent } from './listarproyectos-consult.component';

describe('ListarproyectosConsultComponent', () => {
  let component: ListarproyectosConsultComponent;
  let fixture: ComponentFixture<ListarproyectosConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproyectosConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproyectosConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
