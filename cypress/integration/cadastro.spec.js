describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        //Define dimensões de tela
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        //Criar massa de teste
        var entregador ={
            nome: 'Janaina Feitosa',
            cpf: '00000014141',
            email: 'janaina@email.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '63031280',
                rua: 'Rua Coronel José Moreira Cabral',
                numero: '306',
                complemento: 'Casa',
                bairro: 'Tiradentes',
                cidade_uf: 'Juazeiro do Norte/CE'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf) 
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        //Verificação das informações inseridas
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        //cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        cy.get('img[alt="Moto"]').click()

        /*Expressões regulares
          Acento ^ é para dizer que a propriedade começa com algo
          $ é para dizer que a propriedade termina com */
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

        cy.get('form button[type="submit"]').click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    })
})