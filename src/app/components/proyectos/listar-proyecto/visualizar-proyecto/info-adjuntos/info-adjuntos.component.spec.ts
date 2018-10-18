import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdjuntosComponent } from './info-adjuntos.component';

describe('InfoAdjuntosComponent', () => {
  let component: InfoAdjuntosComponent;
  let fixture: ComponentFixture<InfoAdjuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAdjuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
