class CreateHero {
    selectorsList() {
        const selectors = {
            heroButton : '[href="/heroes/new"]',
            nameField : '[data-cy="nameInput"]',
            priceField : '[data-cy="priceInput"]',
            fansField : '[data-cy="fansInput"]',
            savesField : '[data-cy="savesInput"]',
            powersField : '[data-cy="powersSelect"]',
            createButton : ':nth-child(7)'
        }
        return selectors
    }

    newHeroCreation(){
        cy.get(this.selectorsList().heroButton) .click()
        cy.get(this.selectorsList().nameField) .type('Homelander')
        cy.get(this.selectorsList().priceField) .type ('99999999')
        cy.get(this.selectorsList().fansField) .type ('1234556')
        cy.get(this.selectorsList().savesField) .type ('2')
        cy.get(this.selectorsList().powersField) .select('Fireball')
        cy.get('[data-cy=avatarFile]').selectFile(
        './cypress/fixtures/avatar.png')
        cy.get(this.selectorsList().createButton) .eq(2) .click()
    }
}

export default CreateHero