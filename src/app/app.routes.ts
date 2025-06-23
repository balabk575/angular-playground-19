import { Routes } from '@angular/router';
import { LineItemFormComponent } from './components/line-item-form/line-item-form.component';
import { PersonalInformationsFormComponent } from './components/personal-informations-form/personal-informations-form.component';
import { PrFormResolverService } from './services/resolvers/pr-form-resolver.service';

export const routes: Routes = [
    {path:'pr-form-details',component:PersonalInformationsFormComponent, resolve:{formData: PrFormResolverService}}
];
