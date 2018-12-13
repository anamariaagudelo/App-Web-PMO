import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdjuntosAdminComponent } from './info-adjuntos-admin.component';

describe('InfoAdjuntosAdminComponent', () => {
  let component: InfoAdjuntosAdminComponent;
  let fixture: ComponentFixture<InfoAdjuntosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAdjuntosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdjuntosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
