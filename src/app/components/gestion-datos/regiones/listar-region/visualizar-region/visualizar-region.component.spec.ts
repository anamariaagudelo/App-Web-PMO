import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarRegionComponent } from './visualizar-region.component';

describe('VisualizarRegionComponent', () => {
  let component: VisualizarRegionComponent;
  let fixture: ComponentFixture<VisualizarRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
