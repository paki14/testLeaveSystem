import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRequestWiewCardComponent } from './pre-request-wiew-card.component';

describe('PreRequestWiewCardComponent', () => {
  let component: PreRequestWiewCardComponent;
  let fixture: ComponentFixture<PreRequestWiewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRequestWiewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRequestWiewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
