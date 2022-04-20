import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        
        //Criar massa de teste
        var deliver ={
            name: 'Janaina Feitosa',
            cpf: '00000014141',
            email: 'janaina@email.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '63031280',
                street: 'Rua Coronel José Moreira Cabral',
                number: '306',
                details: 'Casa',
                district: 'Tiradentes',
                city_state: 'Juazeiro do Norte/CE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(expectedMessage)
        
    })

    it('CPF incorreto', () => {
    
        var deliver ={
            name: 'Janaina Feitosa',
            cpf: '000000141AA',
            email: 'janaina@email.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '63031280',
                street: 'Rua Coronel José Moreira Cabral',
                number: '306',
                details: 'Casa',
                district: 'Tiradentes',
                city_state: 'Juazeiro do Norte/CE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})