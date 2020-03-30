import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Mistakes from './mistakes';

describe(`Should Mistakes render correctly`, () => {
  it(`With one zero count`, () => {
    const markup = renderer
      .create(<Mistakes
        count={0}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`With one one count`, () => {
    const markup = renderer
      .create(<Mistakes
        count={1}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
