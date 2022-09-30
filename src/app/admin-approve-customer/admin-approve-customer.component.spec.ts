import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveCustomerComponent } from './admin-approve-customer.component';

describe('AdminApproveCustomerComponent', () => {
  let component: AdminApproveCustomerComponent;
  let fixture: ComponentFixture<AdminApproveCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApproveCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
