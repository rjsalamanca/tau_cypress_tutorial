/// <reference types="cypress" />

it('Sending requests', () => {

   cy
      .visit('/')

   // cy.request({
   //    method: 'POST',
   //    url: '/api/boards',
   //    body: {
   //       name: 'board created by .request() command'
   //    }
   // })

   cy.request({
      method: 'PATCH',
      url: '/api/boards/36722706109',
      body: {
         name: 'board created by .request() Patch command'
      }
   })
});