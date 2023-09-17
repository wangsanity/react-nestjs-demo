export class HomePage {
    homeText = () => cy.contains('Home');
    notesLink = () => cy.contains('Notes');
}