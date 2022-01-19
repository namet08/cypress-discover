import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro', function () {

    it('Usuário deve ser tornar um entregador', function () {

        var deliver = signupFactory.deliver()

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage);
    })

    it('Teste com cpf invalido', function () {
        
        var deliver = signupFactory.deliver()

        deliver.cpf = '000000000zz'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
    it('Teste com email invalido', function () {
                    
        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Require fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome'},
            { field: 'cpf', output: 'É necessário informar o CPF'},
            { field: 'postalCode', output: 'É necessário informar o email'},
            { field: 'name', output: 'É necessário informar o CEP'},
            { field: 'number', output: 'É necessário informar o número do endereço'},
            { field: 'deliveryMethod', output: 'Selecione o método de entrega'},
            { field: 'cnh', output: 'Adicione uma foto da sua CNH'},
        ]

        before(function(){
            signup.go();
            signup.submit();
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })
})
