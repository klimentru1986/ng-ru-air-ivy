import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLibComponent } from './lazy-lib.component';

describe('LazyLibComponent', () => {
  let component: LazyLibComponent;
  let fixture: ComponentFixture<LazyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
