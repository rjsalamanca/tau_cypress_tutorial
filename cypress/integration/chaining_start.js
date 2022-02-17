/// <reference types="cypress" />

beforeEach(() => {

   cy
      .visit('/board/36722706109')
})

it('Chaining commands', () => {

   // cy.contains('milk')

   cy.get('[data-cy=task]')
      .should(item => {
         if (item.length !== 3) {
            throw new Error('Not enough elements');
         }
         expect(item[0]).to.contain.text('bread');
         expect(item[1]).to.contain.text('milk');
      })

   //then is not retired, should is retried
   //errors will stop continuation of cypress tests
});