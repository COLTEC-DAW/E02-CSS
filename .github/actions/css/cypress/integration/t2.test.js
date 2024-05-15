describe('T2: Estrutura Textual', () => {
    beforeEach(() => {
        cy.visit('/index.html')
    })

    it('Aspectos gerais de tamanho e fonte devem estar conforme o enunciado', () => {
        // 1.1. Check if the page has a fixed size
        cy.get('body').should('have.css', 'width')
        cy.get('body').should('have.css', 'height')

        // 1.2. Check if the page font is sans-serif
        cy.get('body').should('have.css', 'font-family').and('match', /sans-serif/)

        // 1.3. Check if the paragraphs are indented by 1em
        cy.get('p').should('have.css', 'text-indent', '16px')
    })

    it('Títulos e parágrafos devem possuir o tamanho correto', () => {
        cy.get('h1').should(($h1) => {
            const fontSize = parseFloat(window.getComputedStyle($h1[0]).fontSize);
            expect(fontSize).to.be.at.least(24);
        });
        cy.get('h2').should(($h2) => {
            const fontSize = parseFloat(window.getComputedStyle($h2[0]).fontSize);
            expect(fontSize).to.be.at.least(22);
        });
        cy.get('h3').should(($h3) => {
            const fontSize = parseFloat(window.getComputedStyle($h3[0]).fontSize);
            expect(fontSize).to.be.at.least(18);
        });
        cy.get('h2').should(($h2) => {
            const textIndent = parseFloat(window.getComputedStyle($h2[0]).textIndent);
            expect(textIndent).to.be.at.least(16);
        });
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
            expect(style.lineHeight).to.be.equal('24px');
        });
    });

    it('Deve ter a abreviatura em small-caps', () => {  
        cy.get('abbr').each(($abbr) => {
          cy.wrap($abbr)
            .should('have.css', 'font-variant', 'small-caps');
        });
    });
})