import { AppComponent } from './../../src/app/app.component';
import { storiesOf } from '@storybook/angular';

storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: AppComponent,
    props: {
      title: '😀 😎 👍 💯',
    },
  }))
  .add('with some azeaze', () => ({
    component: AppComponent,
    props: {
      title: '😀 😎 azeaze 👍 💯',
    },
  }))
  .add('with NOTHING', () => ({
    component: AppComponent,
  })
);
