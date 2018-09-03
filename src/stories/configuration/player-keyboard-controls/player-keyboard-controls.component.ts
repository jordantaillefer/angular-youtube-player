import { Component } from '@angular/core';

@Component({
  selector: 'app-player-keyboard-controls',
  template: `
    <app-ngx-youtube-player [kbcontrols]="true" videoId="imGaOIm5HOk"></app-ngx-youtube-player>
  `
})
export class PlayerKeyboardControlsComponent {}
