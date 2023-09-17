import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Button</Button>);
  });

  it('shows children', () => {
    const children = 'Button';
    render(<Button>{children}</Button>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
