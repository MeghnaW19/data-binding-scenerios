import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio3ChildComponent } from './scenerio3-child.component';

describe('Scenerio3ChildComponent', () => {
  let component: Scenerio3ChildComponent;
  let fixture: ComponentFixture<Scenerio3ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio3ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
