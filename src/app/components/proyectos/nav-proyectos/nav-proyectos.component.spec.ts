import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProyectosComponent } from './nav-proyectos.component';

describe('NavProyectosComponent', () => {
  let component: NavProyectosComponent;
  let fixture: ComponentFixture<NavProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
