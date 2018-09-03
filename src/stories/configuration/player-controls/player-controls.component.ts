import { Component } from '@angular/core';

@Component({
  selector: 'app-player-controls',
  template: `
    <app-ngx-youtube-player [controls]="true" videoId="imGaOIm5HOk"></app-ngx-youtube-player>
  `
})
export class PlayerControlsComponent {}
