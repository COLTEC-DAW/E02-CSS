// describe('T6: Flexbox', () => {
//   before(() => {
//     cy.visit('/index.html')
//   })

  
//   it('deve aplicar flexbox nos links do footer', () => {
//     cy.get('.main footer a').should('have.css', 'display', 'flex')
//       .and('have.css', 'justify-content', 'center')
//   });

//   it('deve aplicar flexbox na seção de benefícios', () => {
//     cy.get('.benefits').should('have.css', 'display', 'flex')
//       .and('have.css', 'flex-direction', 'row-reverse');
//     cy.get('.benefits h3').should('have.css', 'align-self', 'center')
//       .and('have.css', 'flex', '0 0 30%');
//     cy.get('.benefits .text').should('have.css', 'flex', '0 0 70%');
//   });

//   it('deve aplicar flexbox na seção de participação', () => {
//     cy.get('.participation').should('have.css', 'display', 'flex');
//     cy.get('.participation > *').should('have.css', 'flex', '0 0 50%');
//     cy.get('.participation > h3').should('have.css', 'align-self', 'center');
//   });

//   it('deve incluir linha entre as seções de benefícios e participação', () => {
//     cy.get('.benefits').should('have.css', 'border-bottom');
//     cy.get('.participation').should('have.css', 'border-top');
//   });

// });