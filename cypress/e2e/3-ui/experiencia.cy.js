/// <reference types="cypress" />

describe('Funcionalidade: Adicionar Experiência', () => {

    beforeEach(() => {
        cy.loginApp()
        cy.visit('adicionar-experiencia')
    });

    it('Deve adicionar uma experiência com sucesso', () => {
        cy.get('[name="title"]').type('QA Senior')
    });
});