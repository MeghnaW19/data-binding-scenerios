import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio5ParentComponent } from './scenerio5-parent.component';

describe('Scenerio5ParentComponent', () => {
  let component: Scenerio5ParentComponent;
  let fixture: ComponentFixture<Scenerio5ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio5ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio5ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
