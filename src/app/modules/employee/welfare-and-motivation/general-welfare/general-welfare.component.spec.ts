import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralWelfareComponent } from './general-welfare.component';

describe('GeneralWelfareComponent', () => {
  let component: GeneralWelfareComponent;
  let fixture: ComponentFixture<GeneralWelfareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralWelfareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralWelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
