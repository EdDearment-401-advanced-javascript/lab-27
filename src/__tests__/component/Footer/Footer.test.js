import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../../components/footer/footer';

describe('<Footer/>', () => {
  it('is alive at application start', () => {
    const app = shallow(<Footer />);
    expect(app.find('footer').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});