import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyDigits]'
})
export class OnlyDigitsDirective {
  @Input() OnlyDigits: boolean;
  @Input() restrictDecimal: boolean;
  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent>event;

    if (this.OnlyDigits) {

      // if restrict decimal is true do not allow to enter . (decimal)
      if (this.restrictDecimal && (e.keyCode === 190 || e.keyCode === 110)) {
        e.preventDefault();
      }

      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }

      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }
  }
}
