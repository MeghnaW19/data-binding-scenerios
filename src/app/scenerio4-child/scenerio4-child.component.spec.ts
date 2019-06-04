import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio4ChildComponent } from './scenerio4-child.component';

describe('Scenerio4ChildComponent', () => {
  let component: Scenerio4ChildComponent;
  let fixture: ComponentFixture<Scenerio4ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio4ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
