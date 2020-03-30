import * as React from 'react';
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

configure({adapter: new Adapter()});

it(`Should welcome button be pressed`, () => {
  const welcomeButtonHandler = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={3}
        onWelcomeButtonClick={welcomeButtonHandler}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();

  expect(welcomeButtonHandler.mock.calls.length).toBe(1);
});
