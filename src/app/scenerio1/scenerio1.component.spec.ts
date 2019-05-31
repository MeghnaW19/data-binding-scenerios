import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio1Component } from './scenerio1.component';

describe('Scenerio1Component', () => {
  let component: Scenerio1Component;
  let fixture: ComponentFixture<Scenerio1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
