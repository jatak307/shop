import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') public quantity: number = 0;

  constructor(private el: ElementRef, private r: Renderer2) {}

  public ngOnInit(): void {
    if (this.quantity >= 5) {
      if (this.el.nativeElement.className === 'card') {
        this.r.setStyle(
          this.el.nativeElement,
          'border-bottom',
          this.getColorOnAvailability(),
        );
      }
    }
  }

  private getColorOnAvailability(): string {
    let color = '';
    if (this.quantity > 20) {
      color = '#27AE60 solid 5px';
    } else {
      color = '#ffff00 solid 5px';
    }
    return color;
  }
}
