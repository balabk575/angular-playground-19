import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
import { CompBComponent } from '../comp-b/comp-b.component';
import { Button } from 'primeng/button';
import { HoverHighlightDirective } from '../../directive/hover-highlight.directive';

@Component({
  selector: 'app-comp-a',
  imports: [CompBComponent],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CompAComponent {
  userData = {
    name: 'Balakumar',
    age: 29,
  };

  @HostBinding('class.highlighted') isHighlighted = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHighlighted = false; //make it true for testing
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHighlighted = false;
  }

  @ViewChild(CompBComponent) child!: CompBComponent

  
  count = signal(0)
  double = computed(()=> this.count() * 2)

  ngOnInit() {
    this.count.set(5)
    setTimeout(() => {
      this.count.update(prv => prv + 10)
    }, 3000);
  }

  changeName() {
    this.userData.name = 'raghul';  
  }
}
