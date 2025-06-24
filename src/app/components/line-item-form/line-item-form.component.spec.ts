import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemFormComponent } from './line-item-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'host-component',
  template: `<form [formGroup]="form">
    <app-personal-informations-form formGroupName="personalInfo"></app-personal-informations-form>
  </form>`,
  standalone: true,
  imports: [ReactiveFormsModule, LineItemFormComponent]
})

class HostComponent {
  form = new FormGroup({
    personalInfo: new FormGroup({}) // Add the controls expected by the child component
  });
}

describe('LineItemFormComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent], // Only need to import the host
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: {},
          },
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const personalFormComponent = fixture.debugElement.children[0].componentInstance;
    expect(personalFormComponent).toBeTruthy();
  });
});
