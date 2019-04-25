import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRequestFormComponent } from './pre-request-form.component';

describe('PreRequestFormComponent', () => {
  let component: PreRequestFormComponent;
  let fixture: ComponentFixture<PreRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
