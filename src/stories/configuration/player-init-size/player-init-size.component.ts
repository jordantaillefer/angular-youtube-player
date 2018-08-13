import { Component } from '@angular/core';

@Component({
  selector: 'app-player-init-size',
  template: `
    <app-ngx-youtube-player [width]="360" [height]="240"></app-ngx-youtube-player>
  `
})
export class PlayerInitSizeComponent { }
