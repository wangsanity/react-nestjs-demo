import React from 'react';
import { Box } from './Box';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Box>Button</Box>);
  });

  it('shows children', () => {
    const children = 'Box';
    render(<Box>{children}</Box>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
