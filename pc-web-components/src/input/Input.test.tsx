import React from 'react';
import { Input } from './Input';
import { render } from '@testing-library/react';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input />);
  });
});
