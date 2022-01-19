
class SignupPage {
    
    go() {
        cy.visit('/')
        .get("a[href='/deliver']").click()
        .get("#page-deliver form h1").should("have.text", "Cadastre-se para  fazer entregas")

    }

    fillForm(deliver) {
        cy.get("input[name='fullName']").type(deliver.name)
        cy.get("input[name='cpf']").type(deliver.cpf)

        cy.get("input[name='email']").type(deliver.email)
        cy.get("input[name='whatsapp']").type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalCode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[placeholder="Número"]').should('have.value', deliver.address.number)

        cy.get('input[name="address-details"]').should('have.value', deliver.address.details)        
        cy.get('input[placeholder="Bairro"]').should('have.value', deliver.address.district)

        cy.contains('.delivery-method li', deliver.deliveryMethod).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit() {
        cy.get('button[type="submit"]').click()   
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('div[id="swal2-html-container"]')
        .should('have.text', expectedMessage) 
    }

    alertMessageShouldBe(expectedMessage) {
        // cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}

export default new SignupPage;