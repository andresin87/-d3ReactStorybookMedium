// tachometer.stories.js
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tachometer from './Tachometer.jsx';

storiesOf('Tachometer', module)
    .add('20%', () => (
        <Tachometer
            colors={['red', 'green', 'blue']}
            val={20}
        />
    ));