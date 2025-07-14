import { Component, inject, Input, SkipSelf } from '@angular/core';
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
  PRFormDetails,
  Priority,
} from '../../models/PR form/personalDetails.model';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { Button } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { PRCreationService } from '../../services/pr-creation.service';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { PrFormFacade } from '../../store/pr-form/pr-form.facade';

@Component({
  selector: 'app-personal-informations-form',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    DatePickerModule,
    FormBuilderComponent,
    RouterModule
  ],
  viewProviders: [
    {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true }),
}
  ],
  templateUrl: './personal-informations-form.component.html',
  styleUrl: './personal-informations-form.component.scss',
})
export class PersonalInformationsFormComponent {
  parentContainer = inject(ControlContainer);
  priorityLookUp: Priority[] = ['low', 'Medium', 'high'];
  
  personalInformationFormFields: FormAttributes[] = [
  {
    formControlName: 'employeeId',
    formControlType: 'number',
    default: 0,
    isRequired: true,
    label: 'Employee ID'
  },
  {
    formControlName: 'requestorName',
    formControlType: 'text',
    default: '',
    isRequired: true,
    label: 'Requestor Name'
  },
  {
    formControlName: 'department',
    formControlType: 'text',
    default: '',
    isRequired: true,
    label: 'Department'
  },
  {
    formControlName: 'requestDate',
    formControlType: 'Date',
    default: '',
    isRequired: true,
    label: 'Request Date'
  },
  {
    formControlName: 'priority',
    formControlType: 'priority',
    default: 'low',
    isRequired: true,
    label: 'Priority',
    options: this.priorityLookUp
  }];
  
  formData$!: Observable<any>;
  private destroy$ = new Subject<void>()

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }
  constructor(
    private PRFormService: PRCreationService,
    private controlDir: FormGroupDirective,
    private activatedRoute: ActivatedRoute,
    private prFormFacade: PrFormFacade

  ) {
    this.formData$ = this.prFormFacade.formData$;
  }

  ngOnInit() {
    this.parentFormGroup.addControl('employeeInfo',
    this.PRFormService.formBuilder(this.personalInformationFormFields)
    )
    this.PRFormService.subscribeAndPatchForm(this.parentFormGroup, this.formData$, this.destroy$, 'employeeInfo')

  // this.formData$.pipe(takeUntil(this.destroy$), tap(data => console.log(data)
  // )).subscribe({
  //   next: (data: PRFormDetails)=>{
  //      if (this.parentFormGroup.get('employeeInfo' ) && data) {
  //     this.parentFormGroup.get('employeeInfo')!.patchValue(data.personalInformation);
  //   }
  //   }
  // })
  }

    ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

