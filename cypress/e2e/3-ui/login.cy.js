/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('Funcionalidade: Tela de login', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    afterEach(() => {
        cy.screenshot()
    });

    /* 
    Hooks ( ganchos)
    before (antes de todos os cenários)
    beforeEach ( antes de cada cenário)
    after ( depois de todos os cenários)
    afterEach ( depois de cada cenário)
    */

it('Deve fazer login com sucesso', () => {
    cy.get('[data-test="login-email"]').type('fabio.araujo@t5.com')
    cy.get('[data-test="login-password"]').type('teste@123')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Fábio Araújo')
});

it('Deve fazer login com sucesso - Usando Comando customizado', () => {
    cy.login('fabio.araujo@t5.com', 'teste@123')
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Fábio Araújo')
});

it('Deve fazer login com sucesso - Massa de dados Fixture', () => {
    cy.fixture("usuario").then((user) => {
        cy.login(user.email, user.senha)
    })
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
});

it('Deve fazer login com sucesso - Massa de dados com importação', () => {
    cy.login(usuario.email, usuario.senha)
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
});

it('Quando digitar usuário inválido deve aparecer mensagem de erro', () => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('fabio.aradfdfdujo@t5.com')
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste@123')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')

});

it('Quando digitar senha inválida deve aparecer mensagem de erro', () => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('fabio.araújo@t5.com')
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('tesddfte@1fdfd23')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
});
    
});

it.only('Deve fazer login com sucesso usando app action', () => {
    cy.loginApp()
    cy.visit('editar-perfil')
    //cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
});


/* 
Funcionalidade: Tela de login 
Eu como usuario do coenxão QA
Quero fazer meu cadastro 
Para me conectar com outros QAs

Cenário: Login com sucesso
Arrage (Pré-condição) Dado que eu esteja na pagina de login
Act (Ação) Quando eu inserir os dados válidos
Assert (Resultado esperado) Então deve me direcionar para o dashboard

Cenário: Login com usuário ou senha invalidos

Cenário: Recuperar senha
*/

