import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio5ChildComponent } from './scenerio5-child.component';

describe('Scenerio5ChildComponent', () => {
  let component: Scenerio5ChildComponent;
  let fixture: ComponentFixture<Scenerio5ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio5ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
