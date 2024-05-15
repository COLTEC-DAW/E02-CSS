describe('T5: Seletores Pseudo-Classe', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  it('deve customizar a aparência dos links', () => {
    cy.get('a').should(($el) => {
      const style = window.getComputedStyle($el[0]);
      const color = style.color;
      const fontWeight = parseInt(style.fontWeight);

      // $el.trigger('mouseover');
      // const hoveredColor = style.color;

      expect(color).not.to.equal('rgb(0, 0, 238)');
      expect(fontWeight).to.be.greaterThan(400);
      // expect(color).not.to.equal(hoveredColor);
    });
  });

  // it('deve customizar a primeira letra do primeiro parágrafo da seção principal', () => {
  //   cy.get('.main p').first().should('have.css', 'font-size', '48px').and('have.css', 'font-family', 'Arial, sans-serif').and('have.css', 'float', 'left');
  // });

  it('deve conter um separador entre os itens presentes no menu de design', () => {
    cy.get('.design-selection li').should('have.css', 'border-top-style', 'solid');
    cy.get('.design-selection li').last().should('have.css', 'border-bottom-style', 'solid');
  });
});