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

        it.todo('deve ter uma fonte não serifada');
        it.todo('deve ter uma paleta de cores cusotmizada');
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
});