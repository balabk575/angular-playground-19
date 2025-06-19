import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormAttributes } from '../../../models/PR form/personalDetails.model';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, InputTextModule, InputNumberModule, SelectModule, DatePickerModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  @Input() formHeading!: string
  @Input() formGroup!: FormGroup
  @Input() formFields!: FormAttributes[]

}
