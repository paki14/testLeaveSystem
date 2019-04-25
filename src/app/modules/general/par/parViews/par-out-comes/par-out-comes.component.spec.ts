import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParOutComesComponent } from './par-out-comes.component';

describe('ParOutComesComponent', () => {
  let component: ParOutComesComponent;
  let fixture: ComponentFixture<ParOutComesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParOutComesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParOutComesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
