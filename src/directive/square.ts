import { Directive, ElementRef, AfterViewInit } from '@angular/core';

/*
  Generated class for the Square directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[square]' // Attribute selector
})
export class Square implements AfterViewInit {

  constructor(public el: ElementRef) {
  }
  
  ngAfterViewInit() {
    this.el.nativeElement.style.height = this.el.nativeElement.offsetWidth + 'px';
  }
}
