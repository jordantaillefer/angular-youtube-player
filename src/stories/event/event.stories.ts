import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxYoutubePlayerComponent } from '../../app/ngx-youtube-player/ngx-youtube-player.component';
import { CommonModule } from '@angular/common';
import { PlayerDefaultComponent } from '../configuration/player-default/player-default.component';

storiesOf('Player event', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [NgxYoutubePlayerComponent]
    })
  )
  .add('Default player', () => ({
    component: PlayerDefaultComponent,
    props: {}
  }));
