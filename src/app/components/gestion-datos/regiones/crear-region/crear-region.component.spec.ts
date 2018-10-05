import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRegionComponent } from './crear-region.component';

describe('CrearRegionComponent', () => {
  let component: CrearRegionComponent;
  let fixture: ComponentFixture<CrearRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
