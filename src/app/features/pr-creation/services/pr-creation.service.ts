import { Injectable } from '@angular/core';
import { FormAttributes, PRFormDetails } from '../models/PR form/pr-creation';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, interval, Observable, of, Subject, takeUntil, tap, timeout } from 'rxjs';


@Injectable({
  providedIn: 'root',

})
export class PRCreationService {

  constructor() { }
 prFormDetails: PRFormDetails = {
  lineItem: {
    itemCode: 101,
    description: 'High-quality wireless mouse',
    quantity: 50,
    estimatedUnitPrice: 29.99,
    estimatedTotal: 1499.50,
    deliveryDate: new Date('2024-01-15'),
    costCenter: 'IT-Dept',
    justification: 'Replacement for outdated office equipment',
    
  },
  employeeInfo: {
    employeeId: 4567,
    requestorName: 'Jane Doe',
    department: 'IT Support',
    requestDate: new Date(),
    priority: 'Medium'
  }
};

  formBuilder(formFields: FormAttributes[]): FormGroup{
    const formControls: {[key:string]: FormControl} ={}

    formFields.forEach((formField: FormAttributes)=>{
      formControls[formField.formControlName] = new FormControl(formField.default) 
    })

    return new FormGroup(formControls)
  }

  dummyFormValue():Observable<any>{
    return of(this.prFormDetails).pipe(delay(1000))
  }


  subscribeAndPatchForm(formGroup: FormGroup, formData$: Observable<PRFormDetails>, destroy$: Subject<void>, key:string): void {
  formData$.pipe(
    takeUntil(destroy$),
    tap(data => console.log(data))
  ).subscribe({
    next: (data: PRFormDetails) => {
      if (formGroup.get(key) && data) {
        formGroup.get(key)!.patchValue(data[key]);
      }
    }
  });
}


}
