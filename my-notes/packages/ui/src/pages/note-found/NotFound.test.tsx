import React from 'react';
import NotFound from './NotFound';
import { render, screen } from '@testing-library/react';

describe('NotFound', () => {
  it('renders without crashing', () => {
    render(<NotFound />);
  });

  it('shows 404 text', () => {
    render(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
