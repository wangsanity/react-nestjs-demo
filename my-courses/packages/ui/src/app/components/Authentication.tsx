import React from 'react';
// import Login from '../../pages/course/Course';
// import { getPreviousPage, goToPage, removePreviousPage, savePreviousPage } from '../../utils';
// import { userAppSelector } from '../store';
// import { selectUser } from '../userSlice';

interface AuthticationProps {
  children: React.ReactElement;
}

const Authentication = ({ children }: AuthticationProps): React.ReactElement => {
  // const userInfo = userAppSelector(selectUser);

  // if (!userInfo) {
  //   savePreviousPage();
  //   return <Login />;
  // } else {
  //   const previousPage = getPreviousPage();
  //   if (previousPage) {
  //     removePreviousPage();
  //     goToPage(previousPage);
  //     return <></>;
  //   }
  // }

  return children;
};

export default Authentication;
