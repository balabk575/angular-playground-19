import { Injectable } from '@angular/core';
import { FormAttributes } from '../models/PR form/personalDetails.model';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, interval, Observable, of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PRCreationService {

  constructor() { }
  employeeFormDetailsTestValue = {
    EmployeeId: 101,
    "Requestor Name": 'Bala',
    Department: 'Exp eng',
    "Request Date": '10072025',
    Priority: 'high'
  }

  formBuilder(formFields: FormAttributes[]): FormGroup{
    const formControls: {[key:string]: FormControl} ={}

    formFields.forEach((formField: FormAttributes)=>{
      formControls[formField.formControlName] = new FormControl(formField.default) 
    })

    return new FormGroup(formControls)
  }

  dummyFormValue():Observable<any>{
    return of(this.employeeFormDetailsTestValue).pipe(delay(1000))
  }


}
