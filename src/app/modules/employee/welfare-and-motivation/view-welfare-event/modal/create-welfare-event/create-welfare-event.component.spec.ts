import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWelfareEventComponent } from './create-welfare-event.component';

describe('CreateWelfareEventComponent', () => {
  let component: CreateWelfareEventComponent;
  let fixture: ComponentFixture<CreateWelfareEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWelfareEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWelfareEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
