/// <reference types="cypress" />

beforeEach(() => {

   cy
      .visit('/board/36722706109')
})

it('Chaining commands', () => {

   cy.contains('milk')
});