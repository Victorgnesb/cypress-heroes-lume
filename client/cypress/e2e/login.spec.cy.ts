import LoginPage from '../pages/loginPage'
import ListPage from '../pages/listPage'
import CreateHero from '../pages/createHeroPage'

const createheropage = new CreateHero()
const listpage = new ListPage()
const loginPage = new LoginPage()

describe ('Cypress Heroes Tests', () => {
    it('Login correct user - Ex1', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser()
    })

    it ('Login with wrong credentials - Ex2', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithWrongUser()
        loginPage.WrongCredAlert()
    })

    it ('Hero List confirmation - Ex3', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser()
        listpage.listConfirmation()
    })

    it('New Hero - Ex4', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUserAdmin()
        listpage.listConfirmation()
        createheropage.newHeroCreation()

    })

    it('Controle de permissão Ui', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser()
        loginPage.permissionUiCheck()
    })
})