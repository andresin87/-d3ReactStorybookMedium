// .storybook/config.js
import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);