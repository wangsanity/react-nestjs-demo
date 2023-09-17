import React from 'react';
import Home from './Home';
import { render, screen } from '@testing-library/react';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('shows correct elements', () => {
    render(<Home />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Notes')).toBeInTheDocument();
  });
});
