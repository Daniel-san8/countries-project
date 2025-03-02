import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appChangeThemeSecondary]'
})
export class ChangeThemeSecondaryDirective {

  @Input ({required: true}) themeDark = true;
  
    @HostBinding('class.bg-dark-secondary')
    @HostBinding('class.text-dark')
    @HostBinding('class.icon-dark')
    get applyDarkTheme () {
      return this.themeDark
    }
  
    @HostBinding('class.bg-light')
    @HostBinding('class.text-light')
    @HostBinding('class.icon-light')
    get applyLightTheme () {
      return !this.themeDark
    }

}
