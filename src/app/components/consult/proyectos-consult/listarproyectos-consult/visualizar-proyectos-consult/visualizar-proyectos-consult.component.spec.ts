import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProyectosConsultComponent } from './visualizar-proyectos-consult.component';

describe('VisualizarProyectosConsultComponent', () => {
  let component: VisualizarProyectosConsultComponent;
  let fixture: ComponentFixture<VisualizarProyectosConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarProyectosConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarProyectosConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
