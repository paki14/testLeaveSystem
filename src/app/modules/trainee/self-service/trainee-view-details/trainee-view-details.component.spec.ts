import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeViewDetailsComponent } from './trainee-view-details.component';

describe('TraineeViewDetailsComponent', () => {
  let component: TraineeViewDetailsComponent;
  let fixture: ComponentFixture<TraineeViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
