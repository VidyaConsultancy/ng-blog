import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgcolor]',
})
export class BgcolorDirective {
  @Input() bgColor!: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.style.backgroundColor = this.bgColor ? this.bgColor : 'lightgreen';
    this.el.nativeElement.style.padding = '16px 32px';
    this.el.nativeElement.style.boxSizing = 'border-box';
    this.el.nativeElement.style.color = '#fff';
    this.el.nativeElement.style.fontSize = '32px';
  }
}
