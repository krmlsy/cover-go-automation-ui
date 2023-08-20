import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {loginPage} from '@pages/LoginPage'
  import {employeePage} from "@pages/EmployeePage";  

  // test data
  import test_data from "cypress/fixtures/test_data";
  import DataProvider from "cypress/fixtures/Faker";

  const data_provider = new DataProvider();
  Given("The user logins to OrangeHR successfully and goes to employee page", () => {
    cy.visit("/");
    loginPage.submitLogin(test_data.credentials.username,test_data.credentials.password)
  });

  When("Create a new employee", () => {
    employeePage.createEmployee(1, data_provider.firstName(), data_provider.lastName())
  });

  When("Update a created employee", () => {
    employeePage.updateEmployee(1, data_provider.middleName())
  });

  When("Delete a created employee", () => {
    employeePage.deleteEmployee(1)
  });

  When("Make a search for employee", () => {
    employeePage.makeSearchEmployee(1)
  });

  Then("Operation should be successfull", () => {
    employeePage.verifyOperationSuccessfull();
  });

  Then("Employee Page should be fully loaded", () => {
    employeePage.goToCreateEmployeePage()
    employeePage.checkEmployeePageIsLoaded()
  });

  Then("The employee should be found", () => {
    employeePage.checkEmployeeFound()
  });

  Then("The employee should not be found", () => {
    employeePage.checkEmployeeNotFound()
  });



