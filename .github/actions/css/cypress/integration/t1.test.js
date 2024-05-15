describe('T1: Paleta de Cores', () => {
  before(() => {
    cy.visit('/index.html')
  })
  it('Deve ter uma cor customizada para o fundo da página', () => {
    console.log()
    cy.get('body').should('have.css', 'background-color').and('not.equal', 'rgba(0, 0, 0, 0)')
  })
  it('Deve ter uma cor customizada para o texto da página', () => {
    cy.get('body').should('have.css', 'color').and('not.equal', 'rgb(46, 50, 71)')
  })
});