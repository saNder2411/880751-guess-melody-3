import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {GameScreen} from './game-screen.jsx';
import {GameType} from '../../const.js';
import history from '../../history.js';

const children = <div className="children-component" />;

describe(`GameScreen component render correctly`, () => {
  it(`with type GameType.ARTIST`, () => {
    const markup = renderer.create(
        <Router history={history}>
          <GameScreen
            type={GameType.ARTIST}
            mistakes={3}
            goToWelcome={() => {}}>

            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const markup = renderer.create(
        <Router history={history}>
          <GameScreen
            type={GameType.GENRE}
            mistakes={3}
            goToWelcome={() => {}}>

            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(markup).toMatchSnapshot();
  });
});
