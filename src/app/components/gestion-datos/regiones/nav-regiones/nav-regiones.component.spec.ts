import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRegionesComponent } from './nav-regiones.component';

describe('NavRegionesComponent', () => {
  let component: NavRegionesComponent;
  let fixture: ComponentFixture<NavRegionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRegionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
