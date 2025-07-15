import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective {
  private inputSubject = new Subject<string>();
  private destroy$ = new Subject<void>()
  @Output() debounced = new EventEmitter<string>();
  

  constructor() { }
  ngOnInit(){
    this.inputSubject.pipe(takeUntil(this.destroy$),debounceTime(300),distinctUntilChanged()).subscribe({
    next:(val)=>(this.debounced.emit(val)
    )
  })
  }

  @HostListener('input', ['$event']) onInputChange(event: Event){
    const input = (event.target as HTMLInputElement).value;
    this.inputSubject.next(input)
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }


}
