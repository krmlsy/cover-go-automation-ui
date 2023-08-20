Feature: Employee page

    Employee Page and create/update/delete/search employee functionalities.

    Background:
        Given The user logins to OrangeHR successfully and goes to employee page

    @regression
    @happypath
    Scenario: Employee Page Loaded
        Then Employee Page should be fully loaded

    @regression
    @happypath
    Scenario: Create Employee
        When Create a new employee
        Then Operation should be successfull

    @regression
    @happypath
    Scenario: Update Employee
        When Update a created employee
        Then Operation should be successfull

    @regression
    @happypath
    Scenario: Search Employee
        When Make a search for employee
        Then The employee should be found

    @regression
    @happypath
    Scenario: Delete Employee
        When Delete a created employee
        Then Operation should be successfull

    @regression
    @exception
    Scenario: Search Employee Not Found
        When Make a search for employee
        Then The employee should not be found