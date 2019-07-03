import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../components/Counter/Counter';

describe('Counter component', () => {
  it('has an initial state', () => {
    // eslint-disable-next-line no-undef
    const app = shallow(<Counter />);

    expect(app.find('.count').text()).toBe('0');
  });

});
