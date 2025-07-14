import { Routes } from '@angular/router';
import { LineItemFormComponent } from './components/line-item-form/line-item-form.component';
import { PrFormResolverService } from './services/resolvers/pr-form-resolver.service';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { PRFormComponent } from './components/pr-form/pr-form.component';
import { CompAComponent } from './changeDeduction/comp-a/comp-a.component';

export const routes: Routes = [

    {path:'',component:PRFormComponent, resolve:{formData: PrFormResolverService}},
    {path:'pr-form-details',component:BudgetFormComponent, resolve:{formData: PrFormResolverService}},
    {path:'change-Deduction', loadComponent: ()=> import('./changeDeduction/comp-a/comp-a.component').then(m => m.CompAComponent)},
    {path:'dynamic-route/:id', component: BudgetFormComponent}

];
