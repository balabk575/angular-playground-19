import { Component } from '@angular/core';
import { PersonalInformationsFormComponent } from "../personal-informations-form/personal-informations-form.component";
import { LineItemFormComponent } from "../line-item-form/line-item-form.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FormAttributes, Priority } from '../../models/PR form/personalDetails.model';
import { PrFormResolverService } from '../../services/resolvers/pr-form-resolver.service';
import { PRCreationService } from '../../services/pr-creation.service';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';

@Component({
  selector: 'app-pr-form',
  imports: [PersonalInformationsFormComponent, LineItemFormComponent, ReactiveFormsModule, ButtonModule, FormBuilderComponent ],
  templateUrl: './pr-form.component.html',
  styleUrl: './pr-form.component.scss'
})
export class PRFormComponent {
  PRFormGroup!: FormGroup
  constructor(private fb: FormBuilder, private PRFormService: PRCreationService){

  }
  
   

  ngOnInit(){
    this.PRFormGroup = this.fb.group({
    
    })
  }

  onSubmit(){
    console.log(this.PRFormGroup.value)
  }

}
