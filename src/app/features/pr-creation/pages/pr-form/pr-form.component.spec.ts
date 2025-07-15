import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRFormComponent } from './pr-form.component';
import { LineItemFormComponent } from '../../components/line-item-form/line-item-form.component';
import { PersonalInformationsFormComponent } from '../../components/personal-informations-form/personal-informations-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PRFormComponent', () => {
  let component: PRFormComponent;
  let fixture: ComponentFixture<PRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PRFormComponent, LineItemFormComponent,PersonalInformationsFormComponent, ReactiveFormsModule, ButtonModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: {},
            data: of({})
          },
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
