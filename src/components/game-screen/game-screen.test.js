import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen.jsx';
import {GameType} from '../../const.js';

const children = <div className="children-component" />;

describe(`GameScreen component render correctly`, () => {
  it(`with type GameType.ARTIST`, () => {
    const markup = renderer.create(
        <GameScreen type={GameType.ARTIST}>
          {children}
        </GameScreen>
    ).toJSON();

    expect(markup).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const markup = renderer.create(
        <GameScreen type={GameType.GENRE}>
          {children}
        </GameScreen>
    ).toJSON();

    expect(markup).toMatchSnapshot();
  });
});
