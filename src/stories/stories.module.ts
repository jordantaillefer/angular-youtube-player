import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerDefaultComponent } from './configuration/player-default/player-default.component';
import { PlayerInitSizeComponent } from './configuration/player-init-size/player-init-size.component';
import { NgxYoutubePlayerModule } from '../app/ngx-youtube-player/ngx-youtube-player.module';
import { PlayerAutoplayComponent } from './configuration/player-autoplay/player-autoplay.component';
import { PlayerControlsComponent } from './configuration/player-controls/player-controls.component';
import { PlayerKeyboardControlsComponent } from './configuration/player-keyboard-controls/player-keyboard-controls.component';
import { PlayerSoundControlComponent } from './configuration/player-sound-control/player-sound-control.component';
import { PlayerReadyComponent } from './event/player-ready/player-ready.component';
import { PlayerErrorComponent } from './event/player-error/player-error.component';
import { PlayerStateChangeComponent } from './event/player-state-change/player-state-change.component';

@NgModule({
  imports: [CommonModule, NgxYoutubePlayerModule, FormsModule],
  declarations: [
    PlayerDefaultComponent,
    PlayerInitSizeComponent,
    PlayerAutoplayComponent,
    PlayerControlsComponent,
    PlayerKeyboardControlsComponent,
    PlayerSoundControlComponent,
    PlayerReadyComponent,
    PlayerErrorComponent,
    PlayerStateChangeComponent
  ]
})
export class StoriesModule {}
