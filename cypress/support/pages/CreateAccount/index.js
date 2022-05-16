import {ELEMENTS as el} from "./elements";

class CreateAccount {
    preencheForm(User) {
        cy.get('[type="radio"]').first().check()
        cy.get(el.inputCustomerFirstName).type(User.firstName)
        cy.get(el.inputCustomerLastName).type(User.lastName)
        cy.get(el.inputPassword).type(User.password) 
        cy.get(el.selectBirthDay).type(User.birthDay)
        cy.get(el.selectBirthMonth).type(User.birthMonth)
        cy.get(el.selectBirthYear).type(User.birthYear)
        cy.get('[type="checkbox"]').check()       
        cy.get(el.inputFirstName).type(User.firstName)
        cy.get(el.inputLastName).type(User.lastName)
        cy.get(el.inputCompany).type(User.company)
        cy.get(el.inputAddress1).type(User.address)
        cy.get(el.inputCity).type(User.city)
        cy.get(el.selectState).select(User.state)
        cy.get(el.selectCountry).select(User.country)
        cy.get(el.textArea).type(User.addInformation)
        cy.get(el.inputPostCode).type(User.postCode)
        cy.get(el.inputPhoneMobile).type(User.phone)
        cy.get(el.inputAlias).type('Home')
    }

    enviaCadastro() {
        cy.get(el.buttonSubmitAccount).click()
    }
}

export default new CreateAccount();