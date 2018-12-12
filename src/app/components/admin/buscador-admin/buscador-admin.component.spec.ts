import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorAdminComponent } from './buscador-admin.component';

describe('BuscadorAdminComponent', () => {
  let component: BuscadorAdminComponent;
  let fixture: ComponentFixture<BuscadorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
