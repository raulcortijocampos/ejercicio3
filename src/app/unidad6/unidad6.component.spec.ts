import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unidad6Component } from './unidad6.component';

describe('Unidad6Component', () => {
  let component: Unidad6Component;
  let fixture: ComponentFixture<Unidad6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Unidad6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Unidad6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
