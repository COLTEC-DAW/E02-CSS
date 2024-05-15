describe('T3: Box Model', () => {
  before(() => {
    cy.visit('/index.html')
  })

  it('Deve definir diretivas gerais para a página', () => {
    cy.get('.page-wrapper').should('have.css', 'width', '80%')
    cy.get('.page-wrapper').should('have.css', 'max-width', '1280px')
    cy.get('.page-wrapper').should('have.css', 'margin', 'auto')
    cy.get('.intro').should('have.css', 'height', '550px')
    cy.get('#design-archives').should('not.be.visible')
  })

  it('Deve incrementar o cabeçalho da página', () => {
    cy.get('h1').should('have.css', 'margin-right', '1em')
  })

  it('Deve incrementar os menus', () => {
    cy.get('.menu').should('have.css', 'list-style', 'none')
    cy.get('.menu li').should('have.css', 'margin-bottom', '1em')
    cy.get('.menu li').should('have.css', 'text-align', 'center')
  })

  it('Deve estilizar o rodapé da página', () => {
    cy.get('footer').should('have.css', 'margin', '4%')
    cy.get('footer a').should('have.css', 'border', '2px solid')
    cy.get('footer a').should('have.css', 'padding', '0.5em')
  })
});