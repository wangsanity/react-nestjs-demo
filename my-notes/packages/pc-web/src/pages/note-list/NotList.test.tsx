import React from 'react';
import NoteList from './NoteList';
import { render } from '@testing-library/react';
import { RootWithStore } from '../../test-utils';

describe('NoteList', () => {
  it('renders without crashing', () => {
    render(
      <RootWithStore>
        <NoteList />
      </RootWithStore>
    );
  });
});
