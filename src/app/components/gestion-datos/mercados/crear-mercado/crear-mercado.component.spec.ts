import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMercadoComponent } from './crear-mercado.component';

describe('CrearMercadoComponent', () => {
  let component: CrearMercadoComponent;
  let fixture: ComponentFixture<CrearMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
