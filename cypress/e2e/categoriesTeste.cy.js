/// <reference types="cypress" />

const { categories } = require("../fixtures/categories.json");
const { email, senha } = require("../fixtures/data.json");
const { homePage } = require("../support/pages/home.page");

describe('Categories', () => {

    beforeEach(() => {
        cy.login(email, senha)
    })

    categories.forEach(category => {
        it(`Validação categoria ${category.name}`, () => {
            homePage.openSearchProduct()
            homePage.openCategoriesFilter()
            homePage.categories().should('contain.text', category.name)

            cy.compareSnapshot(Cypress.currentTest.title, 0)
        });
    })

})