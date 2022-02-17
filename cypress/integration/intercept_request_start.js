/// <reference types="cypress" />

it('Intercept requests', () => {
   cy.intercept('/api/boards').as('boardList');

   cy
      .visit('/')

   cy.wait('@boardList');
   cy
      .get('[data-cy=board-item]')
      .should('have.length', 0)

});