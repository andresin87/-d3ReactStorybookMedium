// Fancytext.stories.js
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Alphabet from './Alphabet.jsx';

storiesOf('Alphabet', module)
  .add('Alphabet story', () => (
    <svg width="800" height="600">
      <Alphabet x="32" y="300" />
    </svg>
  ));