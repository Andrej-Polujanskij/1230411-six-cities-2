import React from 'react';
import render from 'react-test-renderer';
import App from './app';

import offers from '../../mocks/offers';
import util from '../../util';

it(`App correctly renders after relaunch`, () => {
  util();
  const tree = render
    .create(<App
      offers={offers}
      clickHandler={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
