import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarConsultComponent } from './nabvar-consult.component';

describe('NabvarConsultComponent', () => {
  let component: NabvarConsultComponent;
  let fixture: ComponentFixture<NabvarConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NabvarConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
