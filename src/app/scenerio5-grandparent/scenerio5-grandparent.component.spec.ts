import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio5GrandparentComponent } from './scenerio5-grandparent.component';

describe('Scenerio5GrandparentComponent', () => {
  let component: Scenerio5GrandparentComponent;
  let fixture: ComponentFixture<Scenerio5GrandparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio5GrandparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio5GrandparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
