import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClienteAdminComponent } from './info-cliente-admin.component';

describe('InfoClienteAdminComponent', () => {
  let component: InfoClienteAdminComponent;
  let fixture: ComponentFixture<InfoClienteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoClienteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
