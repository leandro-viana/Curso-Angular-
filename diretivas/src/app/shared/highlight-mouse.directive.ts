import { Directive, HostListener, HostBinding,
  ElementRef, Renderer } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover() {

    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
      );*/
      this.backgroundColor='yellow';
  }

  @HostListener('mouseleave') onmouseleave() {

    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
      );*/
      this.backgroundColor='white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer
    ) { }

}
