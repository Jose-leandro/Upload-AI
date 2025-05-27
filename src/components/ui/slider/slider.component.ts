import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-slider',
  template: '',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  // @Input() min: number = 0;
  // @Input() max: number = 100;
  // @Input() value: number = 50; // Default value
  // @Output() valueChange = new EventEmitter<number>();
  // private isDragging = false;
  // onThumbMouseDown(event: MouseEvent): void {
  //   this.isDragging = true;
  //   document.addEventListener('mousemove', this.onMouseMove);
  //   document.addEventListener('mouseup', this.onMouseUp);
  //   event.preventDefault(); // Prevent text selection while dragging
  // }
  // onMouseMove = (event: MouseEvent): void => {
  //   if (!this.isDragging) return;
  //   const trackElement = document.querySelector('.slider-track') as HTMLElement;
  //   if (trackElement) {
  //     const rect = trackElement.getBoundingClientRect();
  //     const percentage = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
  //     const newValue = Math.round(this.min + percentage * (this.max - this.min));
  //     this.value = newValue;
  //     this.valueChange.emit(this.value);
  //   }
  // };
  // onMouseUp = (): void => {
  //   this.isDragging = false;
  //   document.removeEventListener('mousemove', this.onMouseMove);
  //   document.removeEventListener('mouseup', this.onMouseUp);
  // };
  // onThumbKeyDown(event: KeyboardEvent): void {
  //   if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
  //     this.value = Math.min(this.value + 1, this.max);
  //   } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
  //     this.value = Math.max(this.value - 1, this.min);
  //   }
  //   this.valueChange.emit(this.value);
  // }
}
