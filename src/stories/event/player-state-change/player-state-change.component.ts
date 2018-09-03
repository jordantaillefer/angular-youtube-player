import { Component } from '@angular/core';

@Component({
  selector: 'app-player-state-change',
  template: `
    <app-ngx-youtube-player videoId="imGaOIm5HOk" (stateChange)="handleStateChange($event)"></app-ngx-youtube-player>
  `
})
export class PlayerStateChangeComponent {
  handleStateChange(event) {
    if (event.data === window['YT'].PlayerState.PLAYING) {
      alert('Player state has change ! Now playing !');
    } else if (event.data === window['YT'].PlayerState.PAUSED) {
      alert('Player state has change ! Now pause !');
    } else if (event.data === window['YT'].PlayerState.ENDED) {
      alert('Player state has change ! Now ended !');
    }
  }
}
