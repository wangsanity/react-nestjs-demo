import '@testing-library/cypress/add-commands';

Cypress.Commands.add('login', () => {
    const user = {
        name: 'test',
        token: 'test'
    };

    Cypress.env('token', user.token);
    window.localStorage.setItem('localUserInfo', JSON.stringify(user));
});
