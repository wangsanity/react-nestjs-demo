import React from 'react';
import Authentication from './Authentication';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootWithStore } from '../../test-utils';
import { texts } from '../../texts/texts';

const { short } = texts();

describe('Authentication', () => {
  it('renders without crashing', () => {
    render(
      <RootWithStore>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Authentication>
                  <div>test</div>
                </Authentication>
              }
            />
          </Routes>
        </BrowserRouter>
      </RootWithStore>
    );
  });

  it('shows login page if not login', () => {
    render(
      <RootWithStore>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Authentication>
                  <div>test</div>
                </Authentication>
              }
            />
          </Routes>
        </BrowserRouter>
      </RootWithStore>
    );
    expect(screen.getByText(short.login)).toBeInTheDocument();
  });
});
