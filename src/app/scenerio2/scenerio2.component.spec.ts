import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio2Component } from './scenerio2.component';

describe('Scenerio2Component', () => {
  let component: Scenerio2Component;
  let fixture: ComponentFixture<Scenerio2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
