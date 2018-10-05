import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPaisComponent } from './nav-pais.component';

describe('NavPaisComponent', () => {
  let component: NavPaisComponent;
  let fixture: ComponentFixture<NavPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
