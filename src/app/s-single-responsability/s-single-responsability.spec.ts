import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSingleResponsability } from './s-single-responsability';

describe('SSingleResponsability', () => {
  let component: SSingleResponsability;
  let fixture: ComponentFixture<SSingleResponsability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSingleResponsability]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSingleResponsability);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
