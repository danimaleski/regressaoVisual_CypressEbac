/// <reference types="cypress" />

const { categories } = require("../fixtures/categories.json");
const { email, senha } = require("../fixtures/data.json");
const { homePage } = require("../support/pages/home.page");

describe('List Products', () => {

    beforeEach(() => {
        cy.login(email, senha)
    })

    it(`deve pesquisar os produtos e ter um valor listado`, () => {
        homePage.openSearchProduct()
        homePage.searchProduct('ing')
        homePage.products().should('have.length.greaterThan', 1)

        homePage.products().each(product=>{
            let price = product.find('[data-testid="price"]').text()
            expect(price).to.contain('R$')
        })

        cy.compareSnapshot(Cypress.currentTest.title, 1)
    });

})