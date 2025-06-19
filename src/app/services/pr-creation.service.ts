import { Injectable } from '@angular/core';
import { FormAttributes } from '../models/PR form/personalDetails.model';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PRCreationService {

  constructor() { }
  formBuilder(formFields: FormAttributes[]): FormGroup{
    const formControls: {[key:string]: FormControl} ={}

    formFields.forEach((formField: FormAttributes)=>{
      formControls[formField.formControlName] = new FormControl(formField.default) 
    })

    return new FormGroup(formControls)
  }
}
