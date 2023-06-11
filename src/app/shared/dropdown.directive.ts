import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    const dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    this.renderer.addClass(dropdownMenu, 'show');
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    const isClickedInside = this.elementRef.nativeElement.contains(target);
    const dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu');

    if (!isClickedInside) {
      this.renderer.removeClass(dropdownMenu, 'show');
    }
  }
}
