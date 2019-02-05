import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCacheComponent } from './test-cache.component';

describe('TestCacheComponent', () => {
  let component: TestCacheComponent;
  let fixture: ComponentFixture<TestCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
