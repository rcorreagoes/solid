import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IInterfaceSegregation } from './i-interface-segregation';

describe('IInterfaceSegregation', () => {
  let component: IInterfaceSegregation;
  let fixture: ComponentFixture<IInterfaceSegregation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IInterfaceSegregation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IInterfaceSegregation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
