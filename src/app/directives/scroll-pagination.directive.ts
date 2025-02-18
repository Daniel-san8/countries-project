import { Directive, Host, HostListener } from '@angular/core';
import { AppComponent } from '../app.component';

@Directive({
  selector: '[appScrollPagination]',
  standalone: true
})
export class ScrollPaginationDirective {


  constructor(@Host() private containerCountries: AppComponent) {}
  @HostListener('window:scroll', ['$event']) scrollPage (event: Event) {
    const listElements: HTMLCollection | undefined = this.containerCountries.containerCountries?.first.nativeElement.children[0].children
    console.log(listElements?.item(listElements.length - 1))
  }

}
