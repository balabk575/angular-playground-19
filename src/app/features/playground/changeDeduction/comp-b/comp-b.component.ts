import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DebounceDirective } from '../../directive/debounce.directive';

@Component({
  selector: 'app-comp-b',
  imports: [InputTextModule, DebounceDirective],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompBComponent {
  @Input() userData!: any

  getInputValue(value: string){
    console.log(value);
    
  }
}
