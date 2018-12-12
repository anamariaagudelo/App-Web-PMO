import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClienteConsultComponent } from './info-cliente-consult.component';

describe('InfoClienteConsultComponent', () => {
  let component: InfoClienteConsultComponent;
  let fixture: ComponentFixture<InfoClienteConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoClienteConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClienteConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
