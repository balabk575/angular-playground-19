import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budget-form',
  imports: [],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent {
  budgetId!: string

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.budgetId = this.route.snapshot.paramMap.get('id')!;

  }

}
