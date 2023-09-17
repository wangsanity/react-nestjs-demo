export const apiHeaders = () => ({
    authorization: `Bearer ${Cypress.env('token')}`
});
