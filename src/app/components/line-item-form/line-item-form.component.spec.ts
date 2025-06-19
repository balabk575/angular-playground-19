import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemFormComponent } from './line-item-form.component';

describe('LineItemFormComponent', () => {
  let component: LineItemFormComponent;
  let fixture: ComponentFixture<LineItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineItemFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
