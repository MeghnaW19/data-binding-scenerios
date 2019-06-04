import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio4ParentComponent } from './scenerio4-parent.component';

describe('Scenerio4ParentComponent', () => {
  let component: Scenerio4ParentComponent;
  let fixture: ComponentFixture<Scenerio4ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio4ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio4ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
