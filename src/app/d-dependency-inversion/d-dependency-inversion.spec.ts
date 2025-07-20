import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDependencyInversion } from './d-dependency-inversion';

describe('DDependencyInversion', () => {
  let component: DDependencyInversion;
  let fixture: ComponentFixture<DDependencyInversion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DDependencyInversion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DDependencyInversion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
