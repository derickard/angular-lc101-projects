import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pageTitleComponent } from './page-title.component';

describe('pageTitleComponent', () => {
  let component: pageTitleComponent;
  let fixture: ComponentFixture<pageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
