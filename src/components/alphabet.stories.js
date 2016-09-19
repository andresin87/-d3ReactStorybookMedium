// alphabet.stories.js
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, number } from '@kadira/storybook-addon-knobs';
import backgrounds from "react-storybook-addon-backgrounds";
import centered from '@kadira/react-storybook-decorator-centered';

import Alphabet from './Alphabet';

const stories = storiesOf('Alphabet', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addDecorator(backgrounds([
        { name: "twitter", value: "#00aced" },
        { name: "facebook", value: "#3b5998" },
    ]));

stories
  .addWithInfo(
    'Alphabet story',
    `This is the basic usage of Alphabet svg component.`,
  () => (
    <svg
        width={text('SVG width', 800)}
        height={text('SVG height', 600)}
    >
      <Alphabet
          x={number('Alphabet x', 32)}
          y={number('Alphabet y',300)}
      />
    </svg>
  ));