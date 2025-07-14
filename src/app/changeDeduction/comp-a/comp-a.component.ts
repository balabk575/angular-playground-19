import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CompBComponent } from '../comp-b/comp-b.component';
import { Button } from 'primeng/button';
import { HoverHighlightDirective } from '../../directive/hover-highlight.directive';

@Component({
  selector: 'app-comp-a',
  imports: [CompBComponent, Button, HoverHighlightDirective],
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

  ngOnInit() {}

  changeName() {
    this.userData.name = 'raghul';  
  }
}
