import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../pages/note-found/NotFound';
import Course from '../pages/course/Course';
import CourseHtml from '../pages/courseHtmlElements/CourseHtmlElements';
import CourseChakra from '../pages/courseChakra/CourseChakra';

export const routePaths = {
  default: `/`,
  course: `/course`,
  courseHtml: `/courseHtml`,
  courseChakra: `/courseChakra`,
  home: `/home`,
  notFound: `/404`
};

const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={routePaths.default} element={<Navigate to={routePaths.home} replace />} />
      <Route path={routePaths.course} element={<Course />} key={routePaths.course} />
      <Route path={routePaths.courseHtml} element={<CourseHtml />} key={routePaths.courseHtml} />
      <Route
        path={routePaths.courseChakra}
        element={<CourseChakra />}
        key={routePaths.courseChakra}
      />
      <Route path={routePaths.home} element={<Course />} key={routePaths.home} />
      <Route path={routePaths.notFound} element={<NotFound />} key={routePaths.notFound} />
      <Route path="*" element={<Navigate to={routePaths.notFound} replace />} />
    </Routes>
  );
};

export default AppRoutes;
