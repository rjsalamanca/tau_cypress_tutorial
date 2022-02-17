/// <reference types="cypress" />
// Cypress.Cookies.preserveOnce('trello_token');

describe('Cookies', () => {

   beforeEach(() => {
      Cypress.Cookies.preserveOnce('trello_token');

      cy
         .visit('/')

   })

   it.only('test #1', () => {
      cy.setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwQGV4YW1wbGUuY29tIiwiaWF0IjoxNjQ1MTI3MzA4LCJleHAiOjE2NDUxMzA5MDgsInN1YiI6IjEifQ.zLIbQhJNNGmTtQ2HN1o0s0T7AgTI29ZhvoCMJrCyO5I')
      // cy.reload();
      //  cy
      //    .get('[data-cy="login-menu"]')
      //    .click();

      //  cy
      //    .get('[data-cy="login-email"]')
      //    .type('filip@example.com');

      //  cy
      //    .get('[data-cy="login-password"]')
      //    .type('Asdf.1234#');

      //  cy
      //    .get('[data-cy="login"]')
      //    .click();

   });

   it('test #2', () => {

   });
   it('test #3', () => {

   });

});