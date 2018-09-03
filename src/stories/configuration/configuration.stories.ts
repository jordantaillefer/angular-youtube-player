import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxYoutubePlayerComponent } from '../../app/ngx-youtube-player/ngx-youtube-player.component';
import { CommonModule } from '@angular/common';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { PlayerInitSizeComponent } from './player-init-size/player-init-size.component';
import { PlayerAutoplayComponent } from './player-autoplay/player-autoplay.component';
import { PlayerControlsComponent } from './player-controls/player-controls.component';
import { PlayerKeyboardControlsComponent } from './player-keyboard-controls/player-keyboard-controls.component';
import { PlayerSoundControlComponent } from './player-sound-control/player-sound-control.component';

storiesOf('Player configuration', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [NgxYoutubePlayerComponent]
    })
  )
  .add('Default player', () => ({
    component: PlayerDefaultComponent,
    props: {}
  }))
  .add('Player with init size', () => ({
    component: PlayerInitSizeComponent,
    props: {}
  }))
  .add('Player with autoplay', () => ({
    component: PlayerAutoplayComponent,
    props: {}
  }))
  .add('Player with controls', () => ({
    component: PlayerControlsComponent,
    props: {}
  }))
  .add('Player with keyboard controls', () => ({
    component: PlayerKeyboardControlsComponent,
    props: {}
  }))
  .add('Player with sound control', () => ({
    component: PlayerSoundControlComponent,
    props: {}
  }));
