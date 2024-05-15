describe('T6: Flexbox', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  
  it('deve aplicar flexbox nos links do footer', () => {
    cy.get('.main footer').should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content')
      .and('contain', 'space')
  });

  it('deve aplicar flexbox na seção de benefícios', () => {
    cy.get('.benefits').should('have.css', 'display', 'flex');
    cy.get('.benefits > *').last().should('match', 'p');
    cy.get('.benefits h3').should('have.css', 'align-self', 'center')
      .and('have.css', 'flex').and('contain', '30%');
    cy.get('.benefits p').should('have.css', 'flex').and('contain', '70%');
  });

  it('deve aplicar flexbox na seção de participação', () => {
    cy.get('.participation').should('have.css', 'display', 'flex');
    cy.get('.participation').should('have.css', 'flex-wrap', 'wrap');
    cy.get('.participation > *').should('have.css', 'flex').and('contain', '50%');
    cy.get('.participation > h3').should('have.css', 'align-self', 'center');
  });

  it('deve incluir linha entre as seções de benefícios e participação', () => {
    cy.get('.benefits').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const borderBottomStyle = style.borderBottomStyle;
      // const borderBottomWidth = parseInt(style.borderBottomWidth.replace('px', ''), 10);
      
      expect(borderBottomStyle).to.be.equals('solid');
      // expect(borderBottomWidth).to.not.equal(0);
    });
    
    cy.get('.participation').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const borderTopStyle = style.borderTopStyle;
      // const borderTopWidth = parseInt(style.borderTopWidth.replace('px', ''), 10);
      
      expect(borderTopStyle).to.be.equals('solid');
      // expect(borderTopWidth).to.not.equal(0);
    });
  });

});