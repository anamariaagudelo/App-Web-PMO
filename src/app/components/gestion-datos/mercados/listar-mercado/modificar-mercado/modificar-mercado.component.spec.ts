import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMercadoComponent } from './modificar-mercado.component';

describe('ModificarMercadoComponent', () => {
  let component: ModificarMercadoComponent;
  let fixture: ComponentFixture<ModificarMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
