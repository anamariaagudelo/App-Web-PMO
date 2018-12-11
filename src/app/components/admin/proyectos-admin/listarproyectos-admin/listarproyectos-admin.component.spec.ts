import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproyectosAdminComponent } from './listarproyectos-admin.component';

describe('ListarproyectosAdminComponent', () => {
  let component: ListarproyectosAdminComponent;
  let fixture: ComponentFixture<ListarproyectosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproyectosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproyectosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
