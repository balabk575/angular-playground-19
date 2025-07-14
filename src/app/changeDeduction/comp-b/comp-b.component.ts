import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompBComponent {
  @Input() userData!: any
}
