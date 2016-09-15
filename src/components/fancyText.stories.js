// Fancytext.stories.js
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import App from '../App.jsx';

storiesOf('FancyText', module)
    .add('my first custom story', () => (
        <App />
    ));