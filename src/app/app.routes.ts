import { Routes } from '@angular/router';
import { PrFormResolverService } from './features/pr-creation/services/resolvers/pr-form-resolver.service';
import { BudgetFormComponent } from './features/pr-creation/components/budget-form/budget-form.component';
import { PRFormComponent } from './features/pr-creation/pages/pr-form/pr-form.component';

export const routes: Routes = [

    {path:'',component:PRFormComponent, resolve:{formData: PrFormResolverService}},
    {path:'pr-form-details',component:BudgetFormComponent, resolve:{formData: PrFormResolverService}},
    {path:'change-Deduction', loadComponent: ()=> import('./features/playground/changeDeduction/comp-a/comp-a.component').then(m => m.CompAComponent)},
    {path:'dynamic-route/:id', component: BudgetFormComponent}

];
