describe('T1: Paleta de Cores', () => {
  before(() => {
    cy.visit('/index.html')
  })
  it('Deve ter uma cor customizada para o texto da página', () => {
    cy.get('body, html, .page-wrapper').should('have.css', 'background-color').and('not.equal', 'rgb(255, 255, 255)')
  })
  it('Deve ter uma cor customizada para o fundo da página', () => {
    cy.get('body, html, .page-wrapper').should('have.css', 'color').and('not.equal', 'rgb(0, 0, 0)')
  })
});