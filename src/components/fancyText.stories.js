// Fancytext.stories.js
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import App from '../App';

storiesOf('App', module)
    .add('FancyText', () => (
      <App />
    ));