class LoginPage{
    selectorsList(){
        const selectors = {
            usernameField : '[data-cy="email"]',
            passwordField : '[data-cy="password"]',
            loginButton: ':nth-child(2)',
            genericButton : '[novalidate] > :nth-child(3)',
            wrongAlert : '.text-red-500',
            trashIcon : '[data-cy="trash"]'
        }
        return selectors 
    }

    accessLoginPage(){
        cy.visit('http://localhost:3000/heroes')
    }
    
    loginWithUser(){
        cy.get(this.selectorsList().loginButton) .eq(2) .click()
        cy.get(this.selectorsList().usernameField) .type('test@test.com')
        cy.get(this.selectorsList().passwordField) .type('test123')
        cy.get(this.selectorsList().genericButton) .click()
    }

    loginWithUserAdmin(){
        cy.get(this.selectorsList().loginButton) .eq(2) .click()
        cy.get(this.selectorsList().usernameField) .type('admin@test.com')
        cy.get(this.selectorsList().passwordField) .type('test123')
        cy.get(this.selectorsList().genericButton) .click()
    }

    loginWithWrongUser(){
        cy.get(this.selectorsList().loginButton) .eq(2) .click()
        cy.get(this.selectorsList().usernameField) .type('admin@tst.com')
        cy.get(this.selectorsList().passwordField) .type('test1234')
        cy.get(this.selectorsList().genericButton) .click()
    }

    WrongCredAlert(){
        cy.get(this.selectorsList().wrongAlert) .should('be.visible')
    }

    permissionUiCheck(){
        cy.get(this.selectorsList().trashIcon) .should('not.exist')
    }
    
}
export default LoginPage