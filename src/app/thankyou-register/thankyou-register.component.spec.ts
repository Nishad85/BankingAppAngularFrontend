import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouRegisterComponent } from './thankyou-register.component';

describe('ThankyouRegisterComponent', () => {
  let component: ThankyouRegisterComponent;
  let fixture: ComponentFixture<ThankyouRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankyouRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
