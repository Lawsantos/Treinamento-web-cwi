import authenticationPage from '../support/pages/Authentication';
import createAccountPage from '../support/pages/CreateAccount';
import homePage from '../support/pages/Home';
import myAccountPage from '../support/pages/MyAccount';
import User from '../support/models/user';



describe('Fluxo de cadastro de usuário', () => {
    it('Executa o processo de cadastro', () => {  
        homePage.acessaSignIn()      
        authenticationPage.preencheUmNovoEmail(User)
        authenticationPage.enviaEmail()
        createAccountPage.preencheForm(User)
        createAccountPage.enviaCadastro()
        myAccountPage.verificaSeEstaNaPaginaDoUsuario(User)        
    })
    
  })