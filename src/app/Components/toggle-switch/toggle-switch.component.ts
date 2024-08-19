import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-switch',
  standalone: true,
  imports: [],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss'
})
export class ToggleSwitchComponent {
  @Input ({required: true}) name!: string;

  @Output() passFunction : EventEmitter<any> = new EventEmitter();

  passedFunction(){
    this.passFunction.emit();
   }
  
}
