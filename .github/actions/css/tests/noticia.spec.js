const jsdom = require('jsdom');
const fs = require('fs');

const questionFile = 'noticia.html';

let $ = undefined;
let dom = undefined;
let FILES_PATH = process.env.FILES_PATH;

let html = fs.readFileSync(`${FILES_PATH}/${questionFile}`);
function waitForDom() {
    return new Promise((resolve) => {
        dom = new jsdom.JSDOM(html, {
            runScripts: "dangerously",
            resources: "usable",
            url: `file://${FILES_PATH}/${questionFile}`,
            pretendToBeVisual: true
        });
        dom.window.document.addEventListener("DOMContentLoaded", () => {
            $ = require('jquery')(dom.window);
            resolve();
        });
    });
}

beforeAll(() => waitForDom());

describe('Parte I: Notícia do dia', () => {
    describe('T1: Aparência Geral', () => {

        let body = undefined;
        beforeAll(() => {
            body = $('body');
            body = dom.window.document.querySelector('body');
        });

        it('deve ter uma fonte não serifada', () => {
            let nonSerifFonts = ['arial', 'verdana', 'helvetica', 'tahoma', 'trebuchet MS', 'sans-serif'];
            let fonts = $(body).css('font-family')
                .split(',')
                .map((f) => f.trim().toLowerCase());

            for (const font of fonts) {
                expect(nonSerifFonts).toEqual(expect.arrayContaining([font]));
            }
        });
        it('deve ter uma paleta de cores customizada', () => {
            let color = $(body).css('color');
            let backgroundColor = $(body).css('background-color');

            expect(color).toBeTruthy();
            expect(backgroundColor).toBeTruthy();
        });
        it('deve ter um espaçamento de página customizado', () => {

            let mLeft = dom.window.getComputedStyle(body)
                        .getPropertyValue('margin-left')
                        .replace('%', '');
            let mRight = dom.window.getComputedStyle(body)
                .getPropertyValue('margin-right')
                .replace('%', '');

            expect(parseInt(mLeft)).toBeGreaterThanOrEqual(10);
            expect(parseInt(mLeft)).toBeLessThanOrEqual(20);
            expect(parseInt(mRight)).toBeGreaterThanOrEqual(10);
            expect(parseInt(mRight)).toBeLessThanOrEqual(20);
        });
    });

    describe('T2: Estilo do título', () => {
        let h1 = undefined;
        beforeAll(() => {
            h1 = $('h1');
            h1 = dom.window.document.querySelector('h1');
        });

        it('deve ter tamanho agradável de fonte', () => {
            let fontSize = dom.window.getComputedStyle(h1)
                .getPropertyValue('font-size');

            expect(fontSize).not.toBe('2em');
        });
        it('deve ser centralizado', () => {
            let textAlign = dom.window.getComputedStyle(h1)
                .getPropertyValue('text-align');
            
            expect(textAlign).toBe('center');
        });
        it('deve ter margem pequena', () => {
            let marginLeft = dom.window.getComputedStyle(h1)
                .getPropertyValue('margin-left')
                .replace(/(%|px|em|rem)/, '');
            let marginRight = dom.window.getComputedStyle(h1)
                .getPropertyValue('margin-right')
                .replace(/(%|px|em|rem)/, '');
            let marginTop = dom.window.getComputedStyle(h1)
                .getPropertyValue('margin-top')
                .replace(/(%|px|em|rem)/, '');
            let marginBottom = dom.window.getComputedStyle(h1)
                .getPropertyValue('margin-bottom')
                .replace(/(%|px|em|rem)/, '');

            
            expect(marginLeft).toBeTruthy();
            expect(marginRight).toBeTruthy();
            expect(marginTop).toBeTruthy();
            expect(marginBottom).toBeTruthy();
            
            expect(parseInt(marginLeft)).toBeLessThanOrEqual(20);
            expect(parseInt(marginRight)).toBeLessThanOrEqual(20);
            expect(parseInt(marginTop)).toBeLessThanOrEqual(20);
            expect(parseInt(marginBottom)).toBeLessThanOrEqual(20);
        });
        it('deve ter cor de fonte customizada', () => {
            let color = dom.window.getComputedStyle(h1)
                .getPropertyValue('color');

            expect(color).toBeTruthy();
        });
        it('deve ter padding customizado', () => {
            let paddingLeft = dom.window.getComputedStyle(h1)
                .getPropertyValue('padding-left')
                .replace(/(%|px|em|rem)/, '');
            let paddingRight = dom.window.getComputedStyle(h1)
                .getPropertyValue('padding-right')
                .replace(/(%|px|em|rem)/, '');
            let paddingTop = dom.window.getComputedStyle(h1)
                .getPropertyValue('padding-top')
                .replace(/(%|px|em|rem)/, '');
            let paddingBottom = dom.window.getComputedStyle(h1)
                .getPropertyValue('padding-bottom')
                .replace(/(%|px|em|rem)/, '');


            expect(paddingLeft).toBeTruthy();
            expect(paddingRight).toBeTruthy();
            expect(paddingTop).toBeTruthy();
            expect(paddingBottom).toBeTruthy();
        });
    });

    describe('T3: Customizando subtítulo', () => {
        let h2 = undefined;
        beforeAll(() => {
            h2 = $('h2');
            h2 = dom.window.document.querySelector('h2');
        });
        it('deve estar alinhado a direita', () => {
            let textAlign = dom.window.getComputedStyle(h2)
                .getPropertyValue('text-align');

            expect(textAlign).toBe('right');
        });
        it('deve ter um efeito textual, como itálico ou negrito', () => {
            let validStyles = ['oblique', 'italic'];
            let fontStyle = dom.window.getComputedStyle(h2)
                .getPropertyValue('font-style');

            expect(fontStyle).toBeTruthy();
            expect(validStyles).toEqual(expect.arrayContaining([fontStyle]));
        });
    });

    describe('T4: Parágrafos', () => {
        let p = undefined;
        beforeAll(() => {
            p = $('p');
            p = dom.window.document.querySelector('p');
        });
        
        it('deve ser justificado', () => {
            let textAlign = dom.window.getComputedStyle(p)
                .getPropertyValue('text-align');

            expect(textAlign).toBe('justify');
        });
        it('deve ter espaçamento entre as linhas', () => {
            let lineHeight = dom.window.getComputedStyle(p)
                .getPropertyValue('line-height')
                .replace(/(%|px|em|rem)/, '');

            expect(parseInt(lineHeight)).toBeGreaterThan(100);
        });
    });
});