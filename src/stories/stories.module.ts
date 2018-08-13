import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDefaultComponent } from './configuration/player-default/player-default.component';
import { PlayerInitSizeComponent } from './configuration/player-init-size/player-init-size.component';
import { NgxYoutubePlayerModule } from '../app/ngx-youtube-player/ngx-youtube-player.module';

@NgModule({
  imports: [CommonModule, NgxYoutubePlayerModule],
  declarations: [PlayerDefaultComponent, PlayerInitSizeComponent]
})
export class StoriesModule {}
