import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NoteList from '../pages/note-list/NoteList';
import Home from '../pages/home/Home';
import NotFound from '../pages/note-found/NotFound';

export const routePaths = {
  default: `/`,
  login: `/login`,
  note: `/notes`,
  home: `/home`,
  notFound: `/404`
};

const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={routePaths.default} element={<Navigate to={routePaths.home} replace />} />
      <Route path={routePaths.home} element={<Home />} key={routePaths.home} />
      <Route path={routePaths.note} element={<NoteList />} key={routePaths.note} />
      <Route path={routePaths.notFound} element={<NotFound />} key={routePaths.notFound} />
      <Route path="*" element={<Navigate to={routePaths.notFound} replace />} />
    </Routes>
  );
};

export default AppRoutes;
