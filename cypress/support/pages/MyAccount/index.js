import {ELEMENTS as el} from "./elements";

class MyAccount {
    verificaSeEstaNaPaginaDoUsuario(User) {
        cy.get(el.userName).should('have.text', User.firstName + ' ' + User.lastName)
    }

    acessaOLogout(){
        cy.get(el.titleSignOut).click()
    }
}
export default new MyAccount();