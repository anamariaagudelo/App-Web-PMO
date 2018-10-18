import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProyectosComponent } from './info-proyectos.component';

describe('InfoProyectosComponent', () => {
  let component: InfoProyectosComponent;
  let fixture: ComponentFixture<InfoProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
