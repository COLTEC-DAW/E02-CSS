describe('Introdução: ', () => {
    beforeEach(() => {
        cy.visit('/index.html')
    })

    it('Verifica a aparência geral', () => {
        cy.get('html').should('not.have.css', 'font-size', '16px')
        cy.get('body').should('not.have.css', 'font-family', '"Times New Roman"')
        cy.get('body').should('not.have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.get('body').should('not.have.css', 'color', 'rgb(0, 0, 0)')
        cy.get('p').should('not.have.css', 'text-indent', '0px')
    })

    it('Verifica títulos', () => {
        cy.get('h1, h2, h3').should('not.have.css', 'text-align', 'start')
        cy.get('h1').should('not.have.css', 'font-size', '24px')
        cy.get('h2').should('not.have.css', 'font-size', '24px')
        cy.get('h3').should('not.have.css', 'font-size', '18.72px')
    })

    it('Verifica Seções de resumo e principal', () => {
        cy.get('.summary').should('not.have.css', 'text-align', 'start')
        cy.get('.main').should('not.have.css', 'line-height', 'normal')
    })

    it('Verifica links e abreviaturas', () => {
        cy.get('a').should('have.css', 'font-weight', '700')
        cy.get('a').should('not.have.css', 'color', 'rgb(0, 0, 238)')
        cy.get('abbr').should('not.have.css', 'color', 'rgb(0, 0, 0)')
    })
})
