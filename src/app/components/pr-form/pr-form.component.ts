import { Component } from '@angular/core';
import { PersonalInformationsFormComponent } from "../personal-informations-form/personal-informations-form.component";
import { LineItemFormComponent } from "../line-item-form/line-item-form.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pr-form',
  imports: [PersonalInformationsFormComponent, LineItemFormComponent, ReactiveFormsModule, ButtonModule ],
  templateUrl: './pr-form.component.html',
  styleUrl: './pr-form.component.scss'
})
export class PRFormComponent {
  PRFormGroup!: FormGroup
  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.PRFormGroup = this.fb.group({
      employeeInfo: this.fb.group({}),
      lineItem: this.fb.group({})
    })
  }

  OnSubmit(){
    console.log(this.PRFormGroup.value)
  }

}
