import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../components/header/header';

describe('<Header/>', () => {
  it('is alive at application start', () => {
    // eslint-disable-next-line no-undef
    const app = shallow(<Header />);
    expect(app.find('header').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
