import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-sound-control',
  template: `
    <app-ngx-youtube-player [volume]="volumeValue" videoId="imGaOIm5HOk"></app-ngx-youtube-player>
    <div class="slidecontainer">
      <label>0</label>
      <input type="range" min="0" max="100" [(ngModel)]="volumeValue">
      <label>100</label>
    </div>
    <label>Current value : {{volumeValue}}</label>
  `,
  styles: [
    `
      .slidecontainer {
        display: flex;
      }
    `
  ]
})
export class PlayerSoundControlComponent {
  volumeValue = 50;
}
