import { Component, Input, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-separator',
  template: ``,
})
export class SeparatorComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() decorative: boolean = true;
  @Input() customClass: string = '';

  @HostBinding('class') get separatorClasses(): string {
    const baseClass = 'shrink-0 bg-border';
    const orientationClass =
      this.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]';
    return `${baseClass} ${orientationClass} ${this.customClass}`;
  }

  @HostBinding('attr.aria-hidden') get isDecorative(): boolean {
    return this.decorative;
  }
}
