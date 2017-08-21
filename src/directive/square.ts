import { Directive, ElementRef, DoCheck } from '@angular/core';

/*
  Generated class for the Square directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[square]' // Attribute selector
})
export class Square implements DoCheck {
  constructor(public el: ElementRef) {
  }

  ngDoCheck(): void {
    this.el.nativeElement.style.height = this.el.nativeElement.offsetWidth + 'px';
  }
}
