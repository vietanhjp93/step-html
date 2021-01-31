import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomImageViewComponent } from './zoom-image-view.component';

describe('ZoomImageViewComponent', () => {
  let component: ZoomImageViewComponent;
  let fixture: ComponentFixture<ZoomImageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomImageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
