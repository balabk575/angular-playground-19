import { Component, inject, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormAttributes, PRFormDetails } from '../../models/PR form/personalDetails.model';
import { FormBuilderComponent } from '../../../../shared/components/form-builder/form-builder.component';
import { PRCreationService } from '../../services/pr-creation.service';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { PrFormFacade } from '../../store/pr-form/pr-form.facade';
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
    label: 'Item Code'
  },
  {
    formControlName: 'description',
    formControlType: 'text',
    default: '',
    isRequired: true,
    label: 'Description'
  },
  {
    formControlName: 'quantity',
    formControlType: 'number',
    default: 0,
    isRequired: true,
    label: 'Quantity'
  },
  {
    formControlName: 'estimatedUnitPrice',
    formControlType: 'number',
    default: 0,
    isRequired: true,
    label: 'Estimated Unit Price'
  },
  {
    formControlName: 'estimatedTotal',
    formControlType: 'number',
    default: 0,
    isRequired: true,
    label: 'Estimated Total'
  },
  {
    formControlName: 'deliveryDate',
    formControlType: 'Date',
    default: '',
    isRequired: true,
    label: 'Delivery Date'
  },
  {
    formControlName: 'costCenter',
    formControlType: 'text',
    default: '',
    isRequired: true,
    label: 'Cost Center'
  },
  {
    formControlName: 'justification',
    formControlType: 'text',
    default: '',
    isRequired: true,
    label: 'Justification'
  },
  {
    label: 'add',
    isRequired: false,
    formControlName: 'btn',
    formControlType: 'Button',
    default:'',
    button:{
      text: 'add',
      icon: 'pi pi-plus',
      action: ()=>{
        this.onAddLineItem()
      },
    }
  }
];
  
  formData$!: Observable<any>;
  private destroy$ = new Subject<void>()

  constructor(
    private PRFormService: PRCreationService,
    private controlDir: FormGroupDirective,
    private prFormFacade: PrFormFacade
  ) {
    this.formData$ = this.prFormFacade.formData$;
  }
  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(
      'lineItem',
      this.PRFormService.formBuilder(this.lineItemFormFields)
    );
    this.PRFormService.subscribeAndPatchForm(this.parentFormGroup, this.formData$, this.destroy$, 'lineItem')

  }

  onAddLineItem(){
    console.log(this.parentFormGroup.get('lineItem')?.value);
  }

    ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
