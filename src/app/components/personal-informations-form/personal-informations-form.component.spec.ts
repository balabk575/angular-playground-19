import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationsFormComponent } from './personal-informations-form.component';

describe('PersonalInformationsFormComponent', () => {
  let component: PersonalInformationsFormComponent;
  let fixture: ComponentFixture<PersonalInformationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInformationsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInformationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
