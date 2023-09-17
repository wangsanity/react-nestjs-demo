import React from 'react';
import Login from '../../pages/login/Login';
import { getPreviousPage, goToPage, removePreviousPage, savePreviousPage } from '../../utils';
import { userAppSelector } from '../store';
import { selectUser } from '../userSlice';

export interface AuthenticationProps {
  children: React.ReactElement;
}

export const Authentication = ({ children }: AuthenticationProps): React.ReactElement => {
  const userInfo = userAppSelector(selectUser);

  if (!userInfo) {
    savePreviousPage();
    return <Login />;
  } else {
    const previousPage = getPreviousPage();
    if (previousPage) {
      removePreviousPage();
      goToPage(previousPage);
      return <></>;
    }
  }

  return children;
};
