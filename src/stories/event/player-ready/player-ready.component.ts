import { Component } from '@angular/core';

@Component({
  selector: 'app-player-ready',
  template: `
    <app-ngx-youtube-player videoId="imGaOIm5HOk" (ready)="handleReady($event)"></app-ngx-youtube-player>
  `
})
export class PlayerReadyComponent {
  handleReady(event) {
    alert('Player is ready to play !');
  }
}
