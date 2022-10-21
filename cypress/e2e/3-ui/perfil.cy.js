/// <reference types="cypress" />
import mockPerfis from "../../fixtures/profile.json"

describe('Funcionalidade: Visualizar perfis', () => {

    beforeEach(() => {
        cy.visit('perfis')
        cy.fixture("profile").then((mockProfile) => {
            cy.intercept('GET', 'api/profile',
            {
                statusCode: 200, 
                body: mockProfile
            })
        })
        cy.reload()
    });

    it('Deve validar o primeiro nome da lista', () => {
       /*  cy.intercept('GET', 'api/profile',
            {
                statusCode: 200,
                body: mockPerfis
            }).as('getPerfis')

            cy.reload() */

        cy.get('[data-test="profile-name"]').first().should('contain', 'Fábio Araújo')
    });

    it('Deve validar o último nome da lista', () => {
        cy.get('[data-test="profile-name"]').last().should('contain', 'Roberto dos Santos Filho')
    });

    it('Deve validar o terceiro nome da lista', () => {
        cy.get('[data-test="profile-name"]').eq(2).should('contain', 'QA Sun')
    });

    it('Deve validar o sexto nome da lista', () => {
        cy.get('[data-test="profile-name"]').eq(5).should('contain', 'Gislaine')
    });

    it('Deve validar Aplicação fora do ar - Erro 500', () => {
        cy.intercept('api/profile', { 
            statusCode: 500
        })
        cy.reload() 
    });

    

});