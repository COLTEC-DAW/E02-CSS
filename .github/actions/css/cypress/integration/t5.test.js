// describe('T5: Seletores Pseudo-Classe', () => {
//   before(() => {
//     cy.visit('/index.html')
//   })

//   it('deve customizar a aparência dos links', () => {
//     cy.get('a').should('have.css', 'color', 'rgb(0, 128, 0)').and('have.css', 'font-weight', '700');
//     cy.get('a').first().click();
//     cy.get('a').first().should('not.have.css', 'font-weight', '700');
//   });

//   it('deve customizar a primeira letra do primeiro parágrafo da seção principal', () => {
//     cy.get('.main p').first().should('have.css', 'font-size', '48px').and('have.css', 'font-family', 'Arial, sans-serif').and('have.css', 'float', 'left');
//   });

//   it('deve conter um separador entre os itens presentes no menu de design', () => {
//     cy.get('.menu-item').should('have.css', 'border-top-style', 'solid');
//     cy.get('.menu-item').last().should('have.css', 'border-bottom-style', 'solid');
//   });
// });