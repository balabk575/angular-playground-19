import { Component } from '@angular/core';
import { PersonalInformationsFormComponent } from '../personal-informations-form/personal-informations-form.component';
import { LineItemFormComponent } from '../line-item-form/line-item-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {
  FormAttributes,
  Priority,
} from '../../models/PR form/personalDetails.model';
import { PrFormResolverService } from '../../services/resolvers/pr-form-resolver.service';
import { PRCreationService } from '../../services/pr-creation.service';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PrFormFacade } from '../../store/pr-form/pr-form.facade';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pr-form',
  imports: [
    PersonalInformationsFormComponent,
    LineItemFormComponent,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './pr-form.component.html',
  styleUrl: './pr-form.component.scss',
})
export class PRFormComponent {
  PRFormGroup!: FormGroup;
  formData$!: Observable<any>;
  loading$!: Observable<boolean>;
  budgetDetails = {
    totalBudget: 5000,
    consumed: 1000,
    remaining: 4000
  }
  constructor(
    private fb: FormBuilder,
    private PRFormService: PRCreationService,
    private activatedRoute: ActivatedRoute,
    private prFormFacade: PrFormFacade
  ) {
      
  }

  ngOnInit() {
    this.PRFormGroup = this.fb.group({});
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response);
      console.log('PRODUCT FETCHED');
    });
    this.prFormFacade.loadForm();
    this.formData$ = this.prFormFacade.formData$;
    this.loading$ = this.prFormFacade.loading$;
  }

  onSubmit() {
    console.log(this.PRFormGroup.value);
  }
}
