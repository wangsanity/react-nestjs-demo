import React from 'react';
import Login from './Login';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootWithStore } from '../../test-utils';
import { texts } from '../../texts/texts';

const { short } = texts();

describe('Login', () => {
  it('renders without crashing', () => {
    render(
      <RootWithStore>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </RootWithStore>
    );
  });

  it('shows correct elements', () => {
    render(
      <RootWithStore>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </RootWithStore>
    );
    expect(screen.getByText(short.login)).toBeInTheDocument();
  });
});
