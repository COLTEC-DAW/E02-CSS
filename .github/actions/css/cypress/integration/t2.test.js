describe('T2: Estrutura Textual', () => {
    before(() => {
        cy.visit('/index.html')
    })

    it('Aspectos gerais de tamanho e fonte devem estar conforme o enunciado', () => {
        // 1.1. Check if the page has a fixed size
        cy.get('body').should('have.css', 'width')
        cy.get('body').should('have.css', 'height')

        // 1.2. Check if the page font is sans-serif
        cy.get('body').should('have.css', 'font-family').and('match', /sans-serif/)

        // 1.3. Check if the paragraphs are indented by 1em
        cy.get('p').should('have.css', 'text-indent', '1em')
    })

    it('Títulos e parágrafos devem possuir o tamanho correto', () => {
        cy.get('h1').should('have.css', 'font-size', '1.8rem');
        cy.get('h2').should('have.css', 'font-size', '1.4rem');
        cy.get('h3').should('have.css', 'font-size', '1.2rem');
        cy.get('p').should('have.css', 'text-indent', '1em');
      });

    it('Deve ter alinhamento do resumo modificado', () => {
        cy.get('.summary').should(($summary) => {
            const style = window.getComputedStyle($summary[0]);
            expect(style.textAlign).to.satisfy(val => val === 'right' || val === 'center');
        });
    });

    it('Deve ter espaçamento entre as linhas customizado', () => {
        cy.get('.main p').should(($p) => {
            const style = window.getComputedStyle($p[0]);
            expect(style.lineHeight).to.equal('1.5');
        });
    });

    it('Deve ter a abreviatura em small-caps', () => {  
        cy.get('abbr').each(($abbr) => {
          cy.wrap($abbr)
            .should('have.css', 'font-variant', 'small-caps');
        });
    });
})