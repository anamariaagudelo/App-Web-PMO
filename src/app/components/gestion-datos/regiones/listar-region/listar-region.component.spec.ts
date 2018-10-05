import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRegionComponent } from './listar-region.component';

describe('ListarRegionComponent', () => {
  let component: ListarRegionComponent;
  let fixture: ComponentFixture<ListarRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
