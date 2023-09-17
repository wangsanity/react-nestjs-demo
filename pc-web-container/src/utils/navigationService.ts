const previousPageKey = 'previousPage';

export const savePreviousPage = () => {
  window.sessionStorage.setItem(previousPageKey, window.location.href);
};

export const getPreviousPage = () => {
  return window.sessionStorage.getItem(previousPageKey);
};

export const removePreviousPage = () => {
  window.sessionStorage.removeItem(previousPageKey);
};

export const goToPage = (url: string) => {
  window.sessionStorage.href = url;
};
