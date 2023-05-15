import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";


@Directive({
  selector: '[highlighted]'
})
export class HighlightDirective {

  @Input('highlighted')
    isHighlighted = false;

    constructor(private el: ElementRef) {
      console.log('check' , this.isHighlighted)
     }


    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    @HostListener('mouseover')
    mouseOver() {

        this.isHighlighted = true;

    }

    @HostListener('mouseleave')
    mouseLeave() {
        this.isHighlighted = false;
        // this.el.nativeElement.style.backgroundColor = '#000000';

    }



}
