import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../pages/note-found/NotFound';
import Note from '../pages/note/Note';
import NoteHtml from '../pages/noteHtmlElements/NoteHtmlElements';
import NoteChakra from '../pages/noteChakra/NoteChakra';

export const routePaths = {
  default: `/`,
  note: `/note`,
  noteHtml: `/noteHtml`,
  noteChakra: `/noteChakra`,
  home: `/home`,
  notFound: `/404`
};

const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={routePaths.default} element={<Navigate to={routePaths.home} replace />} />
      <Route path={routePaths.note} element={<Note />} key={routePaths.note} />
      <Route path={routePaths.noteHtml} element={<NoteHtml />} key={routePaths.noteHtml} />
      <Route path={routePaths.noteChakra} element={<NoteChakra />} key={routePaths.noteChakra} />
      <Route path={routePaths.home} element={<Note />} key={routePaths.home} />
      <Route path={routePaths.notFound} element={<NotFound />} key={routePaths.notFound} />
      <Route path="*" element={<Navigate to={routePaths.notFound} replace />} />
    </Routes>
  );
};

export default AppRoutes;
