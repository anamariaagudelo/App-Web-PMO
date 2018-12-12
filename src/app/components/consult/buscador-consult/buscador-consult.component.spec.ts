import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorConsultComponent } from './buscador-consult.component';

describe('BuscadorConsultComponent', () => {
  let component: BuscadorConsultComponent;
  let fixture: ComponentFixture<BuscadorConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
