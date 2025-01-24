export type Env = {
  apiUrl?: string;
};
export const env: Env = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3010/api/'
};
