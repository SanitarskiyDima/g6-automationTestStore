import user from '../fixtures/user.json'

it('Authorization', () => {

    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('.heading1', {timeout: 2000}).should('contain', user.firstName);

})
