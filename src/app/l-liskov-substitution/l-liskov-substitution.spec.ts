import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLiskovSubstitution } from './l-liskov-substitution';

describe('LLiskovSubstitution', () => {
  let component: LLiskovSubstitution;
  let fixture: ComponentFixture<LLiskovSubstitution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LLiskovSubstitution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LLiskovSubstitution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
