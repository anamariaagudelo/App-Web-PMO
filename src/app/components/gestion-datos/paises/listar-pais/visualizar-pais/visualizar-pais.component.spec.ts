import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPaisComponent } from './visualizar-pais.component';

describe('VisualizarPaisComponent', () => {
  let component: VisualizarPaisComponent;
  let fixture: ComponentFixture<VisualizarPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
