import { configure } from '@storybook/angular';

function loadStories() {
  require('./stories/index.stories.ts');
}

configure(loadStories, module);
