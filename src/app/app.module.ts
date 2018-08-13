import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxYoutubePlayerComponent } from './ngx-youtube-player/ngx-youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxYoutubePlayerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
