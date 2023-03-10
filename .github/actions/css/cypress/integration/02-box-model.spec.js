describe('Box Model e Posicionamento', () => {
    before(() => {
        cy.visit('/index.html')
    });
    
    it('Verifica estrutura geral da página', () => {
        cy.get('.page-wrapper')
            .invoke('width')
            .should('gte', 700)
            .should('lte', 1280);
    });
    
    it('Verifica estrutura do rodapé', () => {
        cy.get('footer')
            .should('have.css', 'text-align', 'center')
            .should('have.css', 'position', 'fixed')
            .should('have.css', 'bottom', '0px');
        cy.get('footer')
            .invoke('width')
            .should('gte', 680);
        cy.get('footer')
            .should('not.have.css', 'padding', '0px')
            .should('not.have.css', 'background-color', 'rgba(0, 0, 0, 0)');

        cy.get('.page-wrapper')
            .should('not.have.css', 'margin-bottom', '0px');

        cy.get('footer > a')
            .should('not.have.css', 'margin-left', '0px')
            .should('not.have.css', 'margin-right', '0px')
            .should('not.have.css', 'color', 'rgb(0, 0, 238)');
    });


    it('Verifica paineis principais e laterais', () => {
        cy.get('.main')
        .should('have.css', 'float', 'left');
        cy.get('.main')
            .invoke('width')
            .should('gte', 450);
            
        cy.get('aside')
            .should('have.css', 'float', 'left');
        cy.get('aside')
            .invoke('width')
            .should('gte', 200);
        cy.get('aside')
            .should('have.css', 'padding-left', '10px')
            .should('have.css', 'padding-right', '10px');
    });


    it('Verifica menus', () => {
        cy.get('aside li')
            .should('have.css', 'list-style-type', 'none')
            .should('not.have.css', 'padding-bottom', '0px')
            .should('not.have.css', 'padding-top', '0px')
            .should('have.css', 'border-top-style', 'solid');
        cy.get('aside li:last-of-type')
            .should('have.css', 'border-bottom-style', 'solid');

        cy.get('.design-selection a')
            .should('have.css', 'display', 'block');
        // cy.get('.design-selection li a:last-of-type::before')
        //     .should('have.css', 'content', '"\\00A9"')
        //     .should('have.css', 'font-size', '0.8em')
        //     .should('have.css', 'padding-right', '0.2rem');

        cy.get('aside h3')
            .should('have.css', 'text-align', 'center');
    });


    it('Verifica os parágrafos', () => {
        // cy.get('.main div > p:first-of-type::first-letter')
        //     .should('have.css', 'font-size', '2em')
        //     .should('have.css', 'font-weight', '900')
        //     .should('have.css', 'border-top-style', 'solid')
        //     .should('have.css', 'border-bottom-style', 'solid')
        //     .should('have.css', 'border-width', '0.5px');
    });

    it('Verifica os links', () => {
        cy.get('a').should('have.css', 'text-decoration-line', 'none');
        cy.get('a').should('not.have.css', 'color', 'rgb(0, 0, 238)');
        // cy.get('a:visited').should('have.css', 'color', 'blue');

        // cy.get('a:hover')
            // .should('have.css', 'text-decoration-line', 'underline')
            // .should('have.css', 'background-color', 'rgb(0, 0, 0)')
            // .should('have.css', 'color', 'rgb(245, 245, 245)');
    });
});