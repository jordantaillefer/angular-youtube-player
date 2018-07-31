import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @Input() title = 'angular-youtube-player';
  videoId = 'FOeRjzYH9JA';

  click() {
    this.videoId = 'u1RSQIVHTLg';
  }
}
