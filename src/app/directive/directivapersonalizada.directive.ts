import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivapersonalizada]'
})
export class DirectivapersonalizadaDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
   }

}
