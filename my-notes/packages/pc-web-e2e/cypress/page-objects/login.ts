export class LoginPage {
    loginButton = () => cy.contains('button', 'Login');
    userNameInput = () => cy.get('input[placeholder="Login name"]');

    clickLoginButton = (): LoginPage => {
        this.loginButton().click();
        return this;
    };
}