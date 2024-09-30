import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleSwitchComponent } from './Components/toggle-switch/toggle-switch.component';
import { CopyClipboardButtonComponent } from './Components/copy-clipboard-button/copy-clipboard-button.component';
import { QrCodeComponent } from './Components/qr-code/qr-code.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleSwitchComponent, CopyClipboardButtonComponent, QrCodeComponent],
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

  openPdf(): void {
    window.open('https://davidfhoward.github.io/Linkedout/assets/UnofficialTranscriptDavidHoward.pdf', '_blank');  
  }
  openPdfMft(): void {
    window.open('https://davidfhoward.github.io/Linkedout/assets/MFTscore.pdf', '_blank');  
  }
}

