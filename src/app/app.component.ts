import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-ngx-youtube-player></app-ngx-youtube-player>`,
})
export class AppComponent {
  @Input()
  title = 'angular-youtube-player';
}
