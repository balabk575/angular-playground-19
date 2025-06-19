import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRFormComponent } from './pr-form.component';

describe('PRFormComponent', () => {
  let component: PRFormComponent;
  let fixture: ComponentFixture<PRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PRFormComponent]
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
