import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PersonalInformationsFormComponent } from "./components/personal-informations-form/personal-informations-form.component";
import { PRFormComponent } from "./components/pr-form/pr-form.component";


@Component({
  selector: 'app-root',
  imports: [ButtonModule, PersonalInformationsFormComponent, PRFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'playground-v19';
}
