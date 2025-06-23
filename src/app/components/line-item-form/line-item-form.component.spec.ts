import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemFormComponent } from './line-item-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('LineItemFormComponent', () => {
  let component: LineItemFormComponent;
  let fixture: ComponentFixture<LineItemFormComponent>;
  let fb: FormBuilder

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineItemFormComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineItemFormComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.lineItemForm = fb.group({
      itemCode: [1],
      description: ['Test'],
      Quantity: [10],
      'estimated unit price': [100],
      'estimated total': [1000],
      'delivery date': ['2025-06-30'],
      'cost center': ['IT'],
      Justification: ['Test reason']
    });

    fixture.detectChanges();
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
