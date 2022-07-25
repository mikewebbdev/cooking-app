import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit  {
  isShow: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isShow = !this.isShow;
    const nextEl = this.renderer.nextSibling(this.elRef.nativeElement);
    if (this.isShow) {
      this.renderer.addClass(nextEl, 'show');
    } else {
      this.renderer.removeClass(nextEl, 'show');
    }
  }
}
