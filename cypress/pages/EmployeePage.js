import Base from "./base/BasePage";

class EmployeePage extends Base{

    elements = {
        employeePageUrl : () => '/web/index.php/pim/viewEmployeeList',
        employeePageHeader: () => cy.xpath("//h6[ text() = 'PIM' ]"),
        submitButton: () => cy.get("button[type='submit']"),
        searchEmployee: () => cy.xpath("//label[text()='Employee Id']/parent::*/parent::*//input"),
        searchEmployeeFound: () => cy.xpath("//*[text() = '(1) Record Found']"),
        searchEmployeeNotFound: () => cy.xpath("//*[ text() = 'No Records Found' ]"),
        addButton: () => cy.get('i.oxd-icon.bi-plus'),
        employeeFirstNameInput: () => cy.get('[name="firstName"]'),
        employeeLastNameInput: () => cy.get('[name="lastName"]'),
        employeeMiddleNameInput: () => cy.get('[name="middleName"]'),
        employeeIdInput: () => cy.xpath("(//label[text()='Employee Id']/following::input)[1]"),
        clickYesToConfirmYes:() => cy.xpath('//button[text()=\' Yes, Delete \']'),
      };
      
    goToCreateEmployeePage(){
        cy.visit(this.elements.employeePageUrl())
        return this
    }

    checkEmployeePageIsLoaded(){
        while (this.elements.employeePageHeader().length > 0){
          this.wait(1000);
    }
    }

    clickSubmit(){
        this.elements.submitButton().first().click()
        return this
    }

    verifyOperationSuccessfull(){
        cy.contains('Success', {timeout : 10000}).should('be.visible')
        return this
    }

    searchEmployee(id){
        this.elements.searchEmployee().type(id)
        return this
    }

    clickSearch(){
        this.wait(2000)
        cy.window().then((win) => { 
            win.eval('document.evaluate("//button[@type=\'submit\']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();');
        });
        
         return this
    }

    checkEmployeeFound(){
        this.elements.searchEmployeeFound().should('be.visible')
        return this
    }


    checkEmployeeNotFound(){
        this.elements.searchEmployeeNotFound().should('be.visible')
        return this
    }

    //add employee
    clickAddButton(){
        this.elements.addButton().click()
        return this
    }

    setFirstName(name){
        this.elements.employeeFirstNameInput().type(name)
        return this
    }

    setLastName(lastName){
        this.elements.employeeLastNameInput().type(lastName)
        return this
    }

    // edit employee
    clickEditButton(){
        this.wait(2000)
        cy.window().then((win) => { 
            win.eval('document.evaluate("(//div[@class=\'oxd-table-cell-actions\']//button)[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();');
        });
        
         return this
    }

    setEmployeeId(id){
        this.elements.employeeIdInput().clear().type(id)
        return this
    }

    setMiddleName(middleName){
        this.elements.employeeMiddleNameInput().type(middleName)
        return this
    }


    //delete employee
    clickDeleteButton(){
        this.wait(2000)
        cy.window().then((win) => { 
            win.eval('document.evaluate("(//div[@class=\'oxd-table-cell-actions\']//button)[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();');
        });
        
         return this
    }

    clickYesToConfirmDialog() {
        this.elements.clickYesToConfirmYes().click()
    }

    // functions
    createEmployee(id, firstName, lastName){
        this.goToCreateEmployeePage()
            .clickAddButton()
            .setEmployeeId(id)
            .setFirstName(firstName)
            .setLastName(lastName)
            .clickSubmit()
    }

    updateEmployee(id, middleName){
        this.goToCreateEmployeePage()
            .searchEmployee(id)
            .clickSearch()
            .clickEditButton()
            .setMiddleName(middleName)
            .clickSubmit()
    }

    makeSearchEmployee(id){
        this.goToCreateEmployeePage()
            .searchEmployee(id)
            .clickSearch()
    }

    deleteEmployee(id){
        this.goToCreateEmployeePage()
            .searchEmployee(id)
            .clickSearch()
            .clickDeleteButton()
            .clickYesToConfirmDialog()
    }
}

export const employeePage = new EmployeePage();
