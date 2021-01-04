import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHtmlComponent } from './step-html.component';

describe('StepHtmlComponent', () => {
  let component: StepHtmlComponent;
  let fixture: ComponentFixture<StepHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
