import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-ui-kit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class UiKitButtonComponent {
  @Input() style?: string;
  @Input() value?: string;
  @Input() disabled?: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onInput(event) {
    this.onClick.emit(event);
  }
}
