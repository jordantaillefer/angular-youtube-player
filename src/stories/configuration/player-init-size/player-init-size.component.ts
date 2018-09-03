import { Component } from '@angular/core';

@Component({
  selector: 'app-player-init-size',
  template: `
    <app-ngx-youtube-player [width]="360" [height]="240" videoId="imGaOIm5HOk"></app-ngx-youtube-player>
  `
})
export class PlayerInitSizeComponent {}
