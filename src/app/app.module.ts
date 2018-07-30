import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularYoutubePlayerComponent } from './angular-youtube-player/angular-youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularYoutubePlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
