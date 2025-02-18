import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollPagination]',
  standalone: true
})
export class ScrollPaginationDirective {

  @Output() reachedBottom = new EventEmitter<void>();

  @HostListener('window:scroll', ['$event'])
  scrollPage() {
    const listElements = document.querySelectorAll('.container-countries-flag');
    if (listElements.length === 0) return;

    const lastElement = listElements[listElements.length - 1] as HTMLDivElement;
    if (!lastElement) return;

    const positionLastElement = lastElement.getBoundingClientRect();

    if (positionLastElement.bottom <= window.innerHeight) {
      this.reachedBottom.emit(); 
    }
  }
}
