import DataProvider from "cypress/fixtures/Faker"

class Base{

constructor() {
this.dataProvider = new DataProvider()
}
    wait(ms){
        cy.wait(ms)
        return this
    }

}

export default Base