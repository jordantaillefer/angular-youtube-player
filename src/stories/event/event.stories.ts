import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxYoutubePlayerComponent } from '../../app/ngx-youtube-player/ngx-youtube-player.component';
import { CommonModule } from '@angular/common';
import { PlayerReadyComponent } from './player-ready/player-ready.component';
import { PlayerErrorComponent } from './player-error/player-error.component';
import { PlayerStateChangeComponent } from './player-state-change/player-state-change.component';

storiesOf('Player event', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [NgxYoutubePlayerComponent]
    })
  )
  .add('Player ready', () => ({
    component: PlayerReadyComponent,
    props: {}
  }))
  .add('Player error', () => ({
    component: PlayerErrorComponent,
    props: {}
  }))
  .add('Player state change', () => ({
    component: PlayerStateChangeComponent,
    props: {}
  }));
