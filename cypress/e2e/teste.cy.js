/// <reference types="Cypress"/>
describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://example.cypress.io')
    //cy.visit('https://automated.ensinio.com/');
    //cy.visit('https://beta.ensinio.com/');
    cy.visit('https://automationpratice.com.br')
      .get('#top_header')

    cy.get('.form-control')
      .type('dudu@qazando.com.br')

    //click no elemento
    cy.get('.clear .theme-btn-one.btn_md')
      .click()

  })
})