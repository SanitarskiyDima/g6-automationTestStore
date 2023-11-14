export function login(user){
    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('.heading1', {timeout: 2000}).should('contain', user.firstName);
}


export function generateUkrainianString(length) {
    const alphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдежзиіїйклмнопрстуфхцчшщьюя';
    let result = '';
    const alphabetLength = alphabet.length;
    
    for (let i = 0; i < length; i++) {
      result += alphabet.charAt(Math.floor(Math.random() * alphabetLength));
    }
  
    return result;
}

export function findProduct(productName) { 
  cy.get('body').then( body => {
      if(body.find(`[title="${productName}"]`).length > 0){
        cy.get(`[title="${productName}"]`).click();
      } else {
        cy.contains('.pagination a', '>').click();
        findProduct(productName);
      }
  })
}

