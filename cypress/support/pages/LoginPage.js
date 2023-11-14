import BasePage from "./BasePage";
import registrPage from "./RegistrationPage"

class LoginPage extends BasePage {

    constructor(){
        super();
        this.elements.registerAccountButton = '#accountFrm button';
    }

    getRegisterAccountButton(){
        return cy.get(this.elements.registerAccountButton)
    }

}

export default new LoginPage();