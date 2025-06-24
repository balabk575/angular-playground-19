import { Component, inject, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormAttributes } from '../../models/PR form/personalDetails.model';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { PRCreationService } from '../../services/pr-creation.service';

@Component({
  selector: 'app-line-item-form',
  imports: [FormBuilderComponent, ReactiveFormsModule],
  viewProviders: [
      {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true }),
},
  ],
  templateUrl: './line-item-form.component.html',
  styleUrl: './line-item-form.component.scss',
})
export class LineItemFormComponent {
  parentContainer = inject(ControlContainer);


  lineItemFormFields: FormAttributes[] = [
    {
      formControlName: 'itemCode',
      formControlType: 'number',
      default: 1,
      isRequired: true,
    },
    {
      formControlName: 'description',
      formControlType: 'text',
      default: '',
      isRequired: true,
    },
    {
      formControlName: 'Quantity',
      formControlType: 'number',
      default: 0,
      isRequired: true,
    },
    {
      formControlName: 'estimated unit price',
      formControlType: 'number',
      default: 0,
      isRequired: true,
    },
    {
      formControlName: 'estimated total',
      formControlType: 'number',
      default: 0,
      isRequired: true,
    },
    {
      formControlName: 'delivery date',
      formControlType: 'Date',
      default: '',
      isRequired: true,
    },
    {
      formControlName: 'cost center',
      formControlType: 'text',
      default: '',
      isRequired: true,
    },
    {
      formControlName: 'Justification',
      formControlType: 'text',
      default: '',
      isRequired: true,
    },
  ];
  constructor(
    private PRFormService: PRCreationService,
    private controlDir: FormGroupDirective
  ) {}
  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(
      'lineItem',
      this.PRFormService.formBuilder(this.lineItemFormFields)
    );
  }
}
