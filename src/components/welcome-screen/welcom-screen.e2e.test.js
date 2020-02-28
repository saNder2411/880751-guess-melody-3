import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

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
