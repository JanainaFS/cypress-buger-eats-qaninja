var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function() {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
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

        return data
    }
}