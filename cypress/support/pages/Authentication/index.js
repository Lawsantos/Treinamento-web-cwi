import {ELEMENTS as el} from "./elements";

class Authentication {
    preencheUmNovoEmail(User) {
        cy.get(el.inputEmail).type(User.email)        
    }
    
    enviaEmail(){
        cy.get(el.buttonCreateAccount).click()
    }
}

export default new Authentication();