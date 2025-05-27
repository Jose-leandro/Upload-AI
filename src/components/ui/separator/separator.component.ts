import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separator',
  standalone: true,
  template: `
    <div
      [class]="
        'separator ' +
        (orientation === 'vertical'
          ? 'separator--vertical'
          : 'separator--horizontal') +
        (decorative ? ' separator--decorative' : '')
      "
      role="separator"
      [attr.aria-orientation]="orientation"
      [attr.aria-hidden]="decorative ? 'true' : null"
    ></div>
  `,
  styleUrls: ['../../ui/separator/separator.componet.scss'],
})
export class SeparatorComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() decorative: boolean = true;
}
