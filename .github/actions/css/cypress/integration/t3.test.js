describe('T3: Box Model', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  it('Deve definir diretivas gerais para a página', () => {
    // cy.get('.page-wrapper').should('have.css', 'width', '80%')
    cy.get('.page-wrapper').should(($elem) => {
      const style = window.getComputedStyle($elem[0]);
      const margin = parseInt(style.marginLeft.replace('px', ''), 10);
      const maxWidth = style.maxWidth;
      expect(maxWidth).to.be.equals('1280px');
      expect(margin).to.be.at.least(50);
    })	  

    cy.get('.intro').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const height = parseInt(style.height.replace('px', ''), 10);
      expect(height).to.be.at.least(500);
    });
    cy.get('#design-archives').should('not.be.visible')
  })

  it('Deve incrementar o cabeçalho da página', () => {
    cy.get('h1').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const marginRight = parseInt(style.marginRight.replace('px', ''), 10);
      const display = style.display;

      expect(marginRight).to.be.at.least(16);
      expect(display).to.contain('inline');
    });
  })

  it('Deve incrementar os menus', () => {
    cy.get('aside ul').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const listStyle = style['list-style'];
      expect(listStyle).to.include('none');
    });
    cy.get('aside li').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const marginBottom = parseInt(style.marginBottom.replace('px', ''), 10);
      const textAlign = style.textAlign;

      expect(marginBottom).to.be.at.least(16);
      expect(textAlign).to.be.equals('center');
    });
  })

  it('Deve estilizar o rodapé da página', () => {
    cy.get('footer').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const margin = parseInt(style.margin.replace('px', ''), 10);
      expect(margin).to.be.greaterThan(20);
    });
    cy.get('footer a').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const borderWidth = parseInt(style.borderWidth.replace('px', ''), 10);
      const borderStyle = style.borderStyle;
      const padding = parseInt(style.padding.replace('px', ''), 10);
    
      expect(borderWidth).to.be.at.least(1);
      expect(borderStyle).to.be.equals('solid');
      expect(padding).to.be.at.least(5);
    });
  })
});