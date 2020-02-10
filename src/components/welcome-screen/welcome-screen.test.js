import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`Should WelcomeScreen render correctly`, () => {
  const markup = renderer
    .create(<WelcomeScreen
      errorCount={3}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
