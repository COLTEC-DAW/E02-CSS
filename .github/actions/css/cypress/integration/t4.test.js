// describe('T4: Posicionamento', () => {
//     before(() => {
//       cy.visit('/index.html')
//     })
  
//     it('deve ter o .page-wrapper como referência de posicionamento', () => {
//         cy.get('.page-wrapper').should('have.css', 'position', 'relative')
//     })    

//     it('deve modificar o tamanho do painel .explanation', () => {  
//         cy.get('.explanation').then(($el) => {
//           // Check width
//           const windowWidth = Cypress.$(cy.state('window')).width();
//           const elementWidth = $el.width();
//           expect(elementWidth).to.be.closeTo(windowWidth * 0.6, 1);
    
//           // Check right margin
//           const marginRight = parseInt($el.css('marginRight'), 10);
//           expect(marginRight).to.be.closeTo(windowWidth * 0.35, 1);
    
//           // Check right border
//           const borderRight = $el.css('borderRight');
//           expect(borderRight).to.equal('1px solid #1f295c');
    
//           // Check right padding
//           const paddingRight = parseInt($el.css('paddingRight'), 10);
//           expect(paddingRight).to.be.closeTo(elementWidth * 0.02, 1);
//         });
//     });

//     it('deve ter o menu de design na posição certa', () => {
//         cy.get('#design-archives').should('have.css', 'top', '560px');
//         cy.get('#design-archives').should('have.css', 'left', '62%');
//         cy.get('#design-archives').should('have.css', 'padding-left', '2%');
//         cy.get('#design-archives').should('have.css', 'padding-right', '2%');
//     });
// });