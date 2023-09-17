const userKey = 'localUserInfo';

export interface User {
  name: string;
  token: string;
}

export const getUserInfo = (): User | null => {
  const str = window.localStorage.getItem(userKey);
  return str ? (JSON.parse(str) as User) : null;
};

export const setUserInfo = (user: User | null): void => {
  if (user) {
    window.localStorage.setItem(userKey, JSON.stringify(user));
  } else {
    window.localStorage.removeItem(userKey);
  }
};
