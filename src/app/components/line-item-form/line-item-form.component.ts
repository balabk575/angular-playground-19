import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormAttributes } from '../../models/PR form/personalDetails.model';
import { FormBuilderComponent } from "../../shared/components/form-builder/form-builder.component";
import { PRCreationService } from '../../services/pr-creation.service';

@Component({
  selector: 'app-line-item-form',
  imports: [FormBuilderComponent],
  viewProviders:[{provide: ControlContainer, useExisting: FormGroupDirective}],
  templateUrl: './line-item-form.component.html',
  styleUrl: './line-item-form.component.scss'
})
export class LineItemFormComponent {
// Item Code (auto-suggest via API)

// Description (autofill from code)

// Quantity (positive integer validator)

// UOM (Unit of Measure - dropdown)

// Estimated Unit Price (number, formatted with currency)

// Estimated Total (auto-calculated)

// Delivery Date (cannot be before PR date)

// Cost Center (mandatory if department is "Finance")

// Justification Notes (conditional: if cost > ₹50,000)
  @Input() formGroupName!: string
  lineItemForm!: FormGroup
  lineItemFormFields: FormAttributes[] = [
    {formControlName: 'itemCode', formControlType:'number',default:1,isRequired:true},
    {formControlName: 'description', formControlType:'text',default:'',isRequired:true},
    {formControlName: 'Quantity', formControlType:'number',default:0,isRequired:true},
    {formControlName: 'estimated unit price', formControlType:'number',default:0,isRequired:true},
    {formControlName: 'estimated total', formControlType:'number',default:0,isRequired:true},
    {formControlName: 'delivery date', formControlType:'Date',default:'',isRequired:true},
    {formControlName: 'cost center', formControlType:'text',default:'',isRequired:true},
    {formControlName: 'Justification', formControlType:'text',default:'',isRequired:true},

  ]
   constructor(private PRFormService: PRCreationService, private controlDir: FormGroupDirective){

  }
  ngOnInit(){
    this.lineItemForm = this.PRFormService.formBuilder(this.lineItemFormFields)
    const parentForm = this.controlDir.control as FormGroup
    parentForm.setControl(this.formGroupName, this.lineItemForm)
  }

}
