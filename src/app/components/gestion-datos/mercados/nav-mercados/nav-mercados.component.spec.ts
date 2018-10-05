import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMercadosComponent } from './nav-mercados.component';

describe('NavMercadosComponent', () => {
  let component: NavMercadosComponent;
  let fixture: ComponentFixture<NavMercadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMercadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
