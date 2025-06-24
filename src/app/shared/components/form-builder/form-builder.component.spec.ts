import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderComponent } from './form-builder.component';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'host-component',
  template: `<form [formGroup]="form">
    <app-personal-informations-form formGroupName="personalInfo"></app-personal-informations-form>
  </form>`,
  standalone: true,
  imports: [ReactiveFormsModule, FormBuilderComponent]
})

class HostComponent {
  form = new FormGroup({
    personalInfo: new FormGroup({}) // Add the controls expected by the child component
  });
}

describe('FormBuilderComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
    const formbuilderComponent = fixture.debugElement.children[0].componentInstance;
    expect(formbuilderComponent).toBeTruthy();
  });
});
