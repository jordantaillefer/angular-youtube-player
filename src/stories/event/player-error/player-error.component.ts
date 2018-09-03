import { Component } from '@angular/core';

@Component({
  selector: 'app-player-error',
  template: `
    <app-ngx-youtube-player videoId="error" (error)="handleError($event)"></app-ngx-youtube-player>
  `
})
export class PlayerErrorComponent {
  handleError(event) {
    switch (event.data) {
      case 2:
        console.log('' + event.data);
        break;
        case 100:
        console.log('' + event.data);
        break;
        case 101 || 150:
        console.log('' + event.data);
        break;
    }
    alert('Player error !');
  }
}
