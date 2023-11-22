import user from '../fixtures/user.json'
import { login, findProduct } from '../support/helper'
import { faker } from '@faker-js/faker'
import orderData from '../fixtures/order.json'

it.skip('Order', () => {

    login(user);

    cy.get('#filter_keyword')
        .type('i')
        .closest("form")
        .submit();

    findProduct(orderData.productName) //Gucci Guilty //Curls to straight Shampoo

    cy.get('.productpagecart').click()
    cy.get('#cart_checkout1').click()
    cy.get('#checkout_btn').click()
    cy.get('.contentpanel').should('contain', "Thank you for shopping with us!")

})
