import React from 'react';
import { Box } from '@wanderingleaf/learning-pc-web-components';
import { useGetNotesQuery } from '../../api/NoteApi';
import { Note } from '../../../../shared';

const NoteList = (): React.ReactElement => {
  const { data: notes, isFetching, isError } = useGetNotesQuery();
  const noteStyle: React.CSSProperties = {
    margin: '20px',
    backgroundColor: '#efefef',
    border: 'solid 1px #eee',
    borderRadius: '4px',
    padding: '15px'
  };

  const noteTitleStyle: React.CSSProperties = {
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const list = (notes?.list || []).map((note: Note, index: number) => (
    <Box key={index} style={noteStyle}>
      <Box style={noteTitleStyle}>{note.title}</Box>
      <Box>{note.detail}</Box>
    </Box>
  ));

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {isError && 'Loading error'}
      {isFetching && 'Loading...'}
      {!isFetching && list}
    </Box>
  );
};

export default NoteList;
