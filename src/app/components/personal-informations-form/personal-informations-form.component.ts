import { Component, inject, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ControlContainer,
  FormGroupDirective,
  Form,
} from '@angular/forms';
import {
  FormAttributes,
  Priority,
} from '../../models/PR form/personalDetails.model';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { Button } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { PRCreationService } from '../../services/pr-creation.service';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-informations-form',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    DatePickerModule,
    FormBuilderComponent,
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  templateUrl: './personal-informations-form.component.html',
  styleUrl: './personal-informations-form.component.scss',
})
export class PersonalInformationsFormComponent {
  parentContainer = inject(ControlContainer);
  priorityLookUp: Priority[] = ['low', 'Medium', 'high'];
  personalInformationFormFields: FormAttributes[] = [
    {
      formControlName: 'EmployeeId',
      formControlType: 'number',
      isRequired: true,
      default: 1,
    },
    {
      formControlName: 'Requestor Name',
      formControlType: 'text',
      isRequired: true,
      default: 'Balakumar',
    },
    {
      formControlName: 'Department',
      formControlType: 'text',
      isRequired: true,
      default: 'Experience Engineering',
    },
    {
      formControlName: 'Request Date',
      formControlType: 'Date',
      isRequired: true,
      default: new Date().toISOString().substring(0, 10),
    },
    {
      formControlName: 'Priority',
      formControlType: 'priority',
      isRequired: true,
      default: 'low',
      options: this.priorityLookUp,
    },
  ];
  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }
  constructor(
    private PRFormService: PRCreationService,
    private controlDir: FormGroupDirective,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.parentFormGroup.addControl('employeeInfo',
    this.PRFormService.formBuilder(this.personalInformationFormFields)
    )
  }
}
