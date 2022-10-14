/// <reference types="cypress" />

describe('Funcionalidade: Perfil via API', () => {

    //let token

    beforeEach(() => {
        cy.token().as("token")
        //(then((tkn) => { token = tkn })
    });

    it('[POST] - Deve fazer um cadastro de um perfil com sucesso', function() {
        cy.request({
            method: 'POST',
            url: 'api/profile',
            headers: { Cookie : this.token},
            body: {
                company: "Ambev",
                status: "Qa Pleno",
                location: "SP",
                website: "https://swapi.dev/documentation",
                skills: "js",
                bio: "Sou o Fábio ....",
                githubusername: "fabiocaraujo"
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.company).to.equal('Ambev')
        })
    });


    
});