import {ELEMENTS as el} from "./elements";

class Home {
    acessaSignIn(){        
        cy.get(el.titleSignIn).click()
    }
}

export default new Home();