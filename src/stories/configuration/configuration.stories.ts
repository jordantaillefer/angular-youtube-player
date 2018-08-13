import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxYoutubePlayerComponent } from '../../app/ngx-youtube-player/ngx-youtube-player.component';
import { CommonModule } from '@angular/common';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { PlayerInitSizeComponent } from './player-init-size/player-init-size.component';

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
    component: PlayerInitSizeComponent,
    props: {}
  }))
  .add('Player with controls', () => ({
    component: PlayerInitSizeComponent,
    props: {}
  }))
  .add('Player with keyboard controls', () => ({
    component: PlayerInitSizeComponent,
    props: {}
  }));
