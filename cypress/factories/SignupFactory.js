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
                whatsapp: '1199999-3299',
                address: {
                    postalCode: '07661195',
                    street: 'Rua João Puga Dias',
                    number: '300',
                    details: 'colinas 2',
                    district: 'Terra Preta (Terra Preta)',
                    city_state: 'São Paulo/SP'
                },
                deliveryMethod: 'Moto',
                cnh: 'cnh-digital.jpg'
            }
            
            return data

        }
    }