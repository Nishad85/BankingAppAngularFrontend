import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeftBankingComponent } from './neft-banking.component';

describe('NeftBankingComponent', () => {
  let component: NeftBankingComponent;
  let fixture: ComponentFixture<NeftBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeftBankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeftBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
