import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PRCreationService } from '../../services/pr-creation.service';
import { PersonalInformationsFormComponent } from './personal-informations-form.component';

@Component({
  selector: 'host-component',
  template: `<form [formGroup]="form">
    <app-personal-informations-form formGroupName="employeeInfo"

    ></app-personal-informations-form>
  </form>`,
  standalone: true,
  imports: [ReactiveFormsModule, PersonalInformationsFormComponent],
})
class HostComponent {
  form = new FormGroup({
  employeeInfo: new FormGroup({
    EmployeeId: new FormControl(0),
    'Requestor Name': new FormControl(''),
    Department: new FormControl(''),
    'Request Date': new FormControl(''),
    Priority: new FormControl('low')
  })
});
}

describe('PersonalInformationsFormComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
          },
        },
        {
          provide: PRCreationService,
          useValue: {
            formBuilder: jasmine.createSpy().and.callFake((fields) => {
              const group: any = {};
              fields.forEach((field: any) => {
                group[field.formControlName] = new FormControl(field.default);
              });
              return new FormGroup(group);
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the host component and child component', () => {
    const personalFormComponent =
      fixture.debugElement.children[0].componentInstance;
    expect(personalFormComponent).toBeTruthy();
  });

  it('should add controls to the personalInfo FormGroup', () => {
    const personalInfoGroup = hostComponent.form.get(
      'employeeInfo'
    ) as FormGroup;
    expect(personalInfoGroup).toBeTruthy();
    
    expect(personalInfoGroup.contains('EmployeeId')).toBeTrue();
    expect(personalInfoGroup.contains('Requestor Name')).toBeTrue();
    expect(personalInfoGroup.contains('Department')).toBeTrue();
    expect(personalInfoGroup.contains('Request Date')).toBeTrue();
    expect(personalInfoGroup.contains('Priority')).toBeTrue();


  });
});
