import { Component, inject, Input, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, NgControl, ReactiveFormsModule } from '@angular/forms';
import { FormAttributes } from '../../../features/pr-creation/models/PR form/personalDetails.model';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, InputTextModule, InputNumberModule, SelectModule, DatePickerModule, ButtonModule],
    viewProviders: [
    { provide: ControlContainer, useFactory: () => inject(ControlContainer, { skipSelf: true }) }
  ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent {
  @Input() formHeading!: string
  @Input() formName!: string
  @Input() formFields!: FormAttributes[]
formGroup: any;

}
