import { savePreviousPage, getPreviousPage, removePreviousPage } from './navigationService';

describe('navigationService', () => {
  it('navigationService functions work', () => {
    const previousPage = 'http://localhost/';
    expect(window.location.href).toEqual(previousPage);

    savePreviousPage();
    expect(getPreviousPage()).toEqual(previousPage);

    removePreviousPage();
    expect(getPreviousPage()).toEqual(null);
  });
});
