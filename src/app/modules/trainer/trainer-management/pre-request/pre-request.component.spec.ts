import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRequestComponent } from './pre-request.component';

describe('PreRequestComponent', () => {
  let component: PreRequestComponent;
  let fixture: ComponentFixture<PreRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
