import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-ui-kit-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class UiKitInputComponent {
  @Input() type?: string;
  @Input() name?: string;
  @Input() style?: string;
  @Input() placeholder?: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  onInput(event) {
    this.onChange.emit(event);
  }
}
