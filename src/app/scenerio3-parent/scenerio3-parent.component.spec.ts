import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio3ParentComponent } from './scenerio3-parent.component';

describe('Scenerio3ParentComponent', () => {
  let component: Scenerio3ParentComponent;
  let fixture: ComponentFixture<Scenerio3ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio3ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio3ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
