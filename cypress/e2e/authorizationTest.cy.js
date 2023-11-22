///<reference types="cypress"/>

import user from '../fixtures/user.json'
import { login } from '../support/helper'
import { faker } from '@faker-js/faker'

it.only('Authorization', () => {

    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('.heading1', {timeout: 2000}).then( firstNameTextElement => {
        expect(firstNameTextElement).contain(user.firstName);
        cy.wrap(firstNameTextElement).should('contain', user.firstName);
    })

    window.localStorage.setItem('hello', 'world')
})


it('Authorization with invalid loginName', () => {

    user.loginName = faker.animal.bear.name

    login(user);

})



it('some test', () => {
    expect('test').to.eq(someTest())
})

function someTest(){
    return 'test'
}

