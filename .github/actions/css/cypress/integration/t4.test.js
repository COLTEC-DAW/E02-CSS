describe('T4: Posicionamento', () => {
    beforeEach(() => {
      cy.visit('/index.html')
    })
  
    it('deve ter o .page-wrapper como referência de posicionamento', () => {
        cy.get('.page-wrapper').should('have.css', 'position', 'relative')
    })    

    it('deve modificar o tamanho do painel .explanation', () => {  
        cy.get('.explanation').then(($el) => {
          // Check width
          const windowWidth = Cypress.$(cy.state('window')).width();
          const elementWidth = $el.width();
          expect(elementWidth).to.be.at.most(windowWidth * 0.6, 1);
    
          // Check right margin
          const marginRight = parseInt($el.css('marginRight'), 10);
          expect(marginRight).to.be.at.most(windowWidth * 0.35, 1);
    
          // Check right border
          const borderRight = $el.css('borderRight');
          expect(borderRight).to.not.contain('0px');
          expect(borderRight).to.contain('solid');
    
          // Check right padding
          const paddingRight = parseInt($el.css('paddingRight'), 10);
          expect(paddingRight).to.be.greaterThan(0);
        });
    });

    it('deve ter o menu de design na posição certa', () => {
      cy.get('#design-archives').should(($el) => {
        const windowWidth = Cypress.$(cy.state('window')).width();

        const style = window.getComputedStyle($el[0]);
        const top = parseInt(style.top.replace('px', ''), 10);
        const left = parseInt(style.left.replace('%', ''), 10);
        const paddingRight = parseInt(style.paddingRight, 10);
        const paddingLeft = parseInt(style.paddingLeft, 10);
        const position = style.position;


        expect(position).to.be.equals('absolute');
        expect(top).to.be.at.least(400);
        expect(left).to.be.at.least(50);
        expect(paddingRight).to.be.greaterThan(0);
        expect(paddingLeft).to.be.greaterThan(0);

      });
    });
});