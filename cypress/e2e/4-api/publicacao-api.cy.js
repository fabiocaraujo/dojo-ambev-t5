/// <reference types="cypress" />
import post from "../../fixtures/posts.json"

describe('Funcionalidade: Publicação via API', () => {
    let token
    beforeEach(() => {
        cy.token().then((tkn) => { token = tkn })
    });

    it('[POST] - Deve criar uma publicação com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/posts',
            headers: { Cookie : token},
            body: post
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    });    
});