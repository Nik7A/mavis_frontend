import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-labelledby="fun">😀 😎 👍 💯</span>
    </Button>
  ));