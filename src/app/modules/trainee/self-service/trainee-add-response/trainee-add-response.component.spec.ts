import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeAddResponseComponent } from './trainee-add-response.component';

describe('TraineeAddResponseComponent', () => {
  let component: TraineeAddResponseComponent;
  let fixture: ComponentFixture<TraineeAddResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeAddResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeAddResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
