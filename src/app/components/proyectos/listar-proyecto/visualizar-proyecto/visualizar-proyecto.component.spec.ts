import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProyectoComponent } from './visualizar-proyecto.component';

describe('VisualizarProyectoComponent', () => {
  let component: VisualizarProyectoComponent;
  let fixture: ComponentFixture<VisualizarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
