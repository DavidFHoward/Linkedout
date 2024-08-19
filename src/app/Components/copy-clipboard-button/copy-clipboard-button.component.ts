import { Component, Input } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'copy-clipboard-button',
  standalone: true,
  imports: [],
  templateUrl: './copy-clipboard-button.component.html',
  styleUrl: './copy-clipboard-button.component.scss'
})
export class CopyClipboardButtonComponent {
  @Input ({required: true}) text!: string;
  showCheck: boolean = false;

  copyText(): void {
    navigator.clipboard.writeText(this.text);
    this.showCheck = true;
    setTimeout(() => {this.showCheck = false}, 2000)
  }
}
