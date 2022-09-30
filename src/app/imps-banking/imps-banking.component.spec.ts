import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpsBankingComponent } from './imps-banking.component';

describe('ImpsBankingComponent', () => {
  let component: ImpsBankingComponent;
  let fixture: ComponentFixture<ImpsBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpsBankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpsBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
