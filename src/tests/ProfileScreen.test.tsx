import React from 'react';
import renderer from 'react-test-renderer';
import ProfileScreen from '../screens/ProfileScreen';

test('ProfileScreen component renders correctly', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
