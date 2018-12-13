import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProyectosAdminComponent } from './visualizar-proyectos-admin.component';

describe('VisualizarProyectosAdminComponent', () => {
  let component: VisualizarProyectosAdminComponent;
  let fixture: ComponentFixture<VisualizarProyectosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarProyectosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarProyectosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
