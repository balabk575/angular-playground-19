import { Injectable } from '@angular/core';
import { FormAttributes } from '../models/PR form/personalDetails.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PRCreationService {

  constructor() { }
  employeeFormDetailsTestValue = {
    EmployeeId: 101,
    RequestorName: 'Bala',
    Department: 'Exp eng',
    RequestDate: '',
    Priority: 'low'
  }

  formBuilder(formFields: FormAttributes[]): FormGroup{
    const formControls: {[key:string]: FormControl} ={}

    formFields.forEach((formField: FormAttributes)=>{
      formControls[formField.formControlName] = new FormControl(formField.default) 
    })

    return new FormGroup(formControls)
  }

  dummyFormValue():Observable<any>{
    return of(this.employeeFormDetailsTestValue)
  }


}
