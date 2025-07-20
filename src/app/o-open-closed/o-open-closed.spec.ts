import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOpenClosed } from './o-open-closed';

describe('OOpenClosed', () => {
  let component: OOpenClosed;
  let fixture: ComponentFixture<OOpenClosed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OOpenClosed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OOpenClosed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
