import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRFormComponent } from './pr-form.component';
import { LineItemFormComponent } from '../line-item-form/line-item-form.component';
import { PersonalInformationsFormComponent } from '../personal-informations-form/personal-informations-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { By } from '@angular/platform-browser';

describe('PRFormComponent', () => {
  let component: PRFormComponent;
  let fixture: ComponentFixture<PRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PRFormComponent, LineItemFormComponent,PersonalInformationsFormComponent, ReactiveFormsModule, ButtonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.PRFormGroup.contains('employeeInfo')).toBeTrue();
    expect(component.PRFormGroup.contains('lineItem')).toBeTrue();
  });

  it('should call on submit when form is sumbitted', ()=>{
    spyOn(component, 'onSubmit');
    const formEl = fixture.debugElement.query(By.css('form'));
    formEl.triggerEventHandler('ngSubmit', {});
    expect(component.onSubmit).toHaveBeenCalled();
  })

  it('should log the form value on submit', ()=>{
    const formData = {
    employeeInfo: {
      EmployeeId: 123,
      'Requestor Name': 'Balakumar',
      Department: 'Experience Engineering',
      'Request Date': '2024-06-19',
      Priority: 'low'
    },
    lineItem: {
      itemCode: 101,
      description: 'Printer',
      Quantity: 10,
      'estimated unit price': 100,
      'estimated total': 1000,
      'delivery date': '2024-06-25',
      'cost center': 'IT-EXP',
      Justification: 'Office use'
    }
  };
  component.PRFormGroup.setValue(formData)
  expect(component.PRFormGroup.valid).toBeTrue();
  const logSpy = spyOn(console, 'log')
  component.onSubmit();
  expect(logSpy).toHaveBeenCalledWith(formData)
  })
});
