/// <reference types="cypress" />

describe('Funcionalidade: Login via API', () => {

    it('[POST] - Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "fabio.araujo@t5.com",
                "password": "teste@123"
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
        })
    });


    
});