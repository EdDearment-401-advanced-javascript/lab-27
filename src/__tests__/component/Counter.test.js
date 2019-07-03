import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../components/Counter/Counter';

describe('Counter component', () => {
  it('has an initial state', () => {
    // eslint-disable-next-line no-undef
    const app = shallow(<Counter />);

    expect(app.find('.count').text()).toBe('0');
  });

  describe('Counter component', () => {
    it('has an initial state', () => {
      // eslint-disable-next-line no-undef
      const app = shallow(<Counter />);
  
      expect(app.find('.count').text()).toBe('0');
    });
  
    it('can decrement on - click', () => {
      const app = mount(<Counter />);
      const down = app.find('.down');

      down.simulate('click');
      expect(app.state('count')).toBe(-1);
      expect(app.find('span').text()).toContain('-1');
  
      down.simulate('click');
      expect(app.state('count')).toBe(-2);
      expect(app.find('span').text()).toContain('-2');
    });
    it('can increment on + click', () => {
      const app = mount(<Counter />);
      const up = app.find('.up');

      up.simulate('click');
      expect(app.state('count')).toBe(1);
  
      up.simulate('click');
      expect(app.state('count')).toBe(2);
    })
  });
});

describe('Counter snapshot test', () => {
  it('renders to DOM correctly', () => {
    const component = renderer.create(<Counter />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
