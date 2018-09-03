import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-autoplay',
  template: `
    <app-ngx-youtube-player [autoplay]="true" videoId="imGaOIm5HOk"></app-ngx-youtube-player>
  `
})
export class PlayerAutoplayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
