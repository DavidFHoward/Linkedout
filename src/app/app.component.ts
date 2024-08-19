import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleSwitchComponent } from './Components/toggle-switch/toggle-switch.component';
import { CopyClipboardButtonComponent } from './Components/copy-clipboard-button/copy-clipboard-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleSwitchComponent, CopyClipboardButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'linkedout';
  darkmode:boolean = false;

  toggleDarkmode(): void {
      this.darkmode = !this.darkmode;
      
      if(this.darkmode)
      {
        document.body.classList.add("darkmode");
      }
      else
      {
        document.body.classList.remove("darkmode")
      }
  }

  copyText(text: string): void {
    navigator.clipboard.writeText(text);
  }
}

