import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMercadoComponent } from './visualizar-mercado.component';

describe('VisualizarMercadoComponent', () => {
  let component: VisualizarMercadoComponent;
  let fixture: ComponentFixture<VisualizarMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
