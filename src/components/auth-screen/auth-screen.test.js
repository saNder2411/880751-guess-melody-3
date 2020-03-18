
import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen.jsx";


const mockHandle = () => {};

it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <AuthScreen
        onReplayButtonClick={mockHandle}
        onSubmit={mockHandle}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
