class LoginPage {
    elements = {
      loginPageHeader: () => cy.xpath("//h5[ text() = 'Login' ]"),
      usernameInput: () => cy.xpath("//input[@placeHolder='Username']"),
      passwordInput: () => cy.xpath("//input[@placeHolder='Password']"),
      loginBtn: () => cy.get("button"),
      invalidCredentialsError: () => cy.xpath("//p[text() = 'Invalid credentials']"),
      requiredCredentialsError: () => cy.xpath("//span[ text() = 'Required' ]"),
    };

    checkLoginPageIsLoaded(){
      while (this.elements.loginPageHeader().length > 0){
        cy.wait(1000);
    }
    }
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }
  
    submitLogin(username,password){
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.loginBtn().click();
    }

    checkInvalidCredsMessage() {
      this.elements.invalidCredentialsError().should('be.visible')
    }

    checkEmptyCredsMessage() {
      this.elements.requiredCredentialsError().should('be.visible')
    }
  }
  
  export const loginPage = new LoginPage();
  