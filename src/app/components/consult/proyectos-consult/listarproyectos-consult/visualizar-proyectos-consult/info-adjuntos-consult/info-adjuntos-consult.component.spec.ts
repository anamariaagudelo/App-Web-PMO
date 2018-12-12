import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdjuntosConsultComponent } from './info-adjuntos-consult.component';

describe('InfoAdjuntosConsultComponent', () => {
  let component: InfoAdjuntosConsultComponent;
  let fixture: ComponentFixture<InfoAdjuntosConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAdjuntosConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdjuntosConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
