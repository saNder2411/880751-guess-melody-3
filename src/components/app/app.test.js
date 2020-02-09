import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const markup = renderer
    .create(<App errorCount={3} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
