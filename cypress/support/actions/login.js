import { homePage } from "../pages/home.page"
import { loginPage } from '../pages'

Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', Cypress.env("ebacStoreVersion"), { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit("/")
    homePage.openMenu('Account')
    loginPage.login(email, senha)
})