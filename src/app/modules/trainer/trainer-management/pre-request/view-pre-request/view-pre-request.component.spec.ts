import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreRequestComponent } from './view-pre-request.component';

describe('ViewPreRequestComponent', () => {
  let component: ViewPreRequestComponent;
  let fixture: ComponentFixture<ViewPreRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPreRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
