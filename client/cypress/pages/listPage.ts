class ListPage {
    selectorsList() {
        const selectors = {
            list : '[data-cy="hero-card"]'
        }
        return selectors
    }

    listConfirmation() {
        cy.get(this.selectorsList().list) .should('be.visible')
    }
}

export default ListPage