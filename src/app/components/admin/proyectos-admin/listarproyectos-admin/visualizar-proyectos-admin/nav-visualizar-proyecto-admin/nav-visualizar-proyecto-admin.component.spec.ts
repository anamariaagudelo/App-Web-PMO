import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVisualizarProyectoAdminComponent } from './nav-visualizar-proyecto-admin.component';

describe('NavVisualizarProyectoAdminComponent', () => {
  let component: NavVisualizarProyectoAdminComponent;
  let fixture: ComponentFixture<NavVisualizarProyectoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVisualizarProyectoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVisualizarProyectoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
