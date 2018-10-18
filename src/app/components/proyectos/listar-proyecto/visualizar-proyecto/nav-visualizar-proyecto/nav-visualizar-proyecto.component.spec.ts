import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVisualizarProyectoComponent } from './nav-visualizar-proyecto.component';

describe('NavVisualizarProyectoComponent', () => {
  let component: NavVisualizarProyectoComponent;
  let fixture: ComponentFixture<NavVisualizarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVisualizarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVisualizarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
