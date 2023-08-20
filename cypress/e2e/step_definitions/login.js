import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'
import { dashboardPage } from "@pages/DashboardPage";

Given("Open OrangeHR Login Page", () => {
  cy.visit("/");
});

When("A user logins with following the credentials {string}, {string}", (username,password) => {
  loginPage.submitLogin(username,password)
});

When("A user logins with empty credentials", () => {
  loginPage.clickLogin()
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    console.log(row)
    loginPage.submitLogin(row.username, row.password)
  });
});

Then("Login Page should be fully loaded", () => {
  loginPage.checkLoginPageIsLoaded()
});

Then("Dashboard page should be opened", () => {
  dashboardPage.checkDashboardHeader();
});

Then("Invalid credentials message should be shown", () => {
  loginPage.checkInvalidCredsMessage();
});

Then("Required messages should be shown for both inputs", () => {
  loginPage.checkEmptyCredsMessage()
});