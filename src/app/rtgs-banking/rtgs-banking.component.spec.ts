import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgsBankingComponent } from './rtgs-banking.component';

describe('RtgsBankingComponent', () => {
  let component: RtgsBankingComponent;
  let fixture: ComponentFixture<RtgsBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtgsBankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtgsBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
